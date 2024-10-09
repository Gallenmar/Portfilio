import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../state/store";
import { Project } from "../state/slices/projectsSlice";
import { Box, Button, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";

const ProjectDetails: React.FC = () => {
	const { id } = useParams<{ id: string }>();
	const project = useSelector((state: RootState) =>
		state.projects.items.find((proj: Project) => proj.id === Number(id))
	);

	if (!project) {
		return <Typography variant="h6">Project not found</Typography>;
	}

	return (
		<Box sx={{ padding: 4 }}>
			<Typography variant="h4" gutterBottom>
				{project.name}
			</Typography>
			<Typography variant="body1" gutterBottom>
				{project.description || "No description available"}
			</Typography>
			<Button
				size="small"
				href={project.html_url}
				target="_blank"
				rel="noopener noreferrer"
				color="primary"
				onClick={(e) => e.stopPropagation()}
			>
				View on GitHub
			</Button>

			{project.readme_content && (
				<Box sx={{ marginTop: 2 }}>
					<Typography variant="h6" gutterBottom>
						README
					</Typography>
					<Box sx={{ color: "text.primary" }}>
						<ReactMarkdown
							components={{
								img: ({ ...props }) => (
									<img
										style={{
											maxWidth: "100%",
											height: "auto",
											marginTop: "16px",
											marginBottom: "16px",
										}}
										{...props}
									/>
								),
							}}
						>
							{project.readme_content}
						</ReactMarkdown>
					</Box>
				</Box>
			)}
		</Box>
	);
};

export default ProjectDetails;
