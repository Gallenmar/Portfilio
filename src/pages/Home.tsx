import { Stack, Typography, Avatar, Box } from "@mui/material";

function Home() {
	return (
		<>
			<Box sx={{ padding: 4 }}>
				<Stack
					direction={{ xs: "column", sm: "row" }} // Responsive: column on small screens, row on larger screens
					spacing={4}
					alignItems="center"
				>
					{/* Image Section */}
					<Box>
						<Avatar
							alt="Nikita"
							src="/Photo.jpeg"
							sx={{ width: 200, height: 200 }}
						/>
					</Box>

					{/* Text Section */}
					<Box>
						<Typography variant="h4" gutterBottom>
							About Me
						</Typography>
						<Typography variant="body1">
							Hi, I’m Nikita Plotnikov. I am passionate about technology,
							coding, and solving problems through innovative solutions. With a
							strong background in software development and a love for
							continuous learning, I aim to build impactful projects and
							contribute to the tech community. When I’m not coding, you can
							find me exploring new technologies, working on personal projects,
							or enjoying outdoor activities.
						</Typography>
					</Box>
				</Stack>
			</Box>
			{/* <Box sx={{ backgroundColor: "primary.dark", padding: 2 }}>
				<Button variant="contained" color="info">
					Info Button
				</Button>
			</Box> */}
		</>
	);
}

export default Home;
