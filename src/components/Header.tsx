import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom"; // Assuming you're using react-router

function Header() {
	const location = useLocation();

	return (
		<AppBar
			position="fixed"
			sx={{
				boxShadow: 0,
				// bgcolor: "transparent",
				backgroundImage: "none",
				// mt: 1,
			}}
		>
			{/* <Toolbar sx={{ backdropFilter: "blur(24px)" }}> */}
			<Toolbar>
				{/* Name on the left */}

				<Typography
					variant="h6"
					sx={{ flexGrow: 1, textAlign: "left", textDecoration: "none" }}
					component={NavLink}
					to="/"
				>
					NIKITA
				</Typography>

				{/* Navigation Links */}
				<Box sx={{ display: "flex", gap: 2 }}>
					<Button
						color="primary"
						component={NavLink}
						to="/"
						variant={location.pathname === "/" ? "contained" : "text"}
					>
						Home
					</Button>
					<Button
						color="primary"
						component={NavLink}
						to="/portfolio"
						variant={location.pathname === "/portfolio" ? "contained" : "text"}
					>
						Portfolio
					</Button>
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;
