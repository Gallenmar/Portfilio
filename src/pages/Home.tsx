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
							Hi, I’m Nikita Plotnikov, a tech enthusiast and final-year student
							at RTU’s Computer Science Faculty. My journey has taken me through
							everything from fun projects with friends to smart city concepts,
							always in pursuit of the next challenge. I love working in teams,
							where my perfectionism and attention to detail ensure we achieve
							excellence, all while keeping a positive vibe. Outside of coding,
							you’ll find me diving into a good book or carving down the slopes
							on a ski trip. Whether it’s a tech project or a weekend hike, I’m
							all about balance – except when it comes to tech. Tech is life.
						</Typography>
					</Box>
				</Stack>
			</Box>
		</>
	);
}

export default Home;
