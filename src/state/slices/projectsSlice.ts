import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { mockProjectData } from "../../assets/mockProjectData";

export interface Project {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
	readme_content: string | null;
	first_image_url: string | null;
}

const extractFirstImageFromMarkdown = (markdown: string): string | null => {
	const imageRegex = /!\[.*?\]\((.*?)\)/; //image tag: ![]()
	const match = markdown.match(imageRegex);
	return match ? match[1] : null;
};

const fetchReadme = async (username: string, repo: string) => {
	try {
		const response = await axios.get(
			`https://api.github.com/repos/${username}/${repo}/readme`,
			{
				headers: {
					Accept: "application/vnd.github.v3.raw",
				},
			}
		);
		return response.data;
	} catch (error) {
		console.error(`Error fetching README for ${repo}:`, error);
		return null;
	}
};

export interface ProjectsState {
	items: Project[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

interface GitHubRepo {
	id: number;
	name: string;
	description: string | null;
	html_url: string;
}

const initialState: ProjectsState = {
	items: mockProjectData,
	status: "idle",
	error: null,
};

// Thunk to fetch projects along with README and first image
export const fetchProjects = createAsyncThunk<Project[], string>(
	"projects/fetchProjects",
	async (username: string, { rejectWithValue }) => {
		try {
			const response = await axios.get(
				`https://api.github.com/users/${username}/repos`
			);

			const projects = await Promise.all(
				response.data.map(async (repo: GitHubRepo) => {
					const readmeContent = await fetchReadme(username, repo.name);
					const firstImageUrl = readmeContent
						? extractFirstImageFromMarkdown(readmeContent)
						: null;

					return {
						id: repo.id,
						name: repo.name,
						description: repo.description,
						html_url: repo.html_url,
						readme_content: readmeContent,
						first_image_url: firstImageUrl,
					};
				})
			);

			return projects;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				if (
					error.response &&
					(error.response.status === 403 || error.response.status === 429)
				) {
					console.error("API rate limit exceeded or access forbidden (403)");
				} else {
					console.error("An error occurred:", error.message);
				}
			} else {
				console.error("An unexpected error occurred:", error);
			}

			return rejectWithValue(
				"Failed to fetch projects due to Github rate limiting."
			);
		}
	}
);

const projectsSlice = createSlice({
	name: "projects",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProjects.pending, (state) => {
				state.status = "loading";
				state.error = null;
			})
			.addCase(
				fetchProjects.fulfilled,
				(state, action: PayloadAction<Project[]>) => {
					state.status = "succeeded";
					state.items = action.payload;
				}
			)
			.addCase(fetchProjects.rejected, (state, action) => {
				state.status = "failed";
				state.error =
					(action.payload as string | null) || "Something went wrong";
			});
	},
});
export default projectsSlice.reducer;
