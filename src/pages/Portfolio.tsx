import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProjects } from "../state/slices/projectsSlice";
import { RootState, AppDispatch } from "../state/store";
import ProjectCard from "../components/ProjectCard";
import { Box, Typography } from "@mui/material";

const ProjectsList: React.FC = () => {
	const dispatch = useDispatch<AppDispatch>();
	const {
		items: projects,
		status,
		error,
	} = useSelector((state: RootState) => state.projects);

	useEffect(() => {
		dispatch(fetchProjects("gallenmar"));
	}, [dispatch]);

	if (status === "loading") {
		return <Typography>Waiting for API to respond...</Typography>;
	}

	return (
		<div>
			{status === "failed" && (
				<Typography variant="h6" color="error" gutterBottom>
					Error: {error}
				</Typography>
			)}
			<Typography variant="h4" gutterBottom>
				My Projects
			</Typography>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-around",
					gap: "16px",
					padding: "16px",
				}}
			>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</Box>
		</div>
	);
};

export default ProjectsList;
