// src/components/ProjectCard.tsx
import React from "react";
import {
	Card,
	Box,
	CardContent,
	CardActions,
	Button,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";
import { Project } from "../state/slices/projectsSlice";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
	project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
	const navigate = useNavigate();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const handleCardClick = () => {
		navigate(`/project/${project.id}`);
	};

	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: isMobile ? "column" : "row", // Switch direction for mobile
				width: "100%",
				marginBottom: 2,
				cursor: "pointer",
			}}
			onClick={handleCardClick}
		>
			{/* Render Image First for Mobile */}
			{isMobile && (
				<Box
					component="img"
					src={project.first_image_url || "https://via.placeholder.com/150"}
					alt="Project"
					sx={{
						width: "100%",
						height: "auto",
						objectFit: "cover",
					}}
				/>
			)}

			<Box sx={{ flex: 1, padding: 2 }}>
				<CardContent>
					<Typography variant="h5" component="div" gutterBottom>
						{project.name}
					</Typography>

					<Typography variant="body2" color="text.secondary">
						{project.description
							? project.description
							: "No description available"}
					</Typography>
				</CardContent>

				<CardActions>
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
				</CardActions>
			</Box>

			{/* Right Side: Image (if not mobile) */}
			{!isMobile && (
				<Box
					component="img"
					src={project.first_image_url || "https://via.placeholder.com/150"}
					alt="Project"
					sx={{
						width: 150,
						height: 150,
						objectFit: "cover",
						borderRadius: "0 4px 4px 0",
					}}
				/>
			)}
		</Card>
	);
};

export default ProjectCard;
