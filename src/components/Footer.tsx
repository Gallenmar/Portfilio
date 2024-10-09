import { Container, Typography, Box, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
	return (
		<Box
			sx={{ bgcolor: "background.paper", p: 3, mt: "auto" }}
			component="footer"
		>
			<Container maxWidth="lg">
				{/* Contacts Section */}
				<Typography variant="h6" align="center" gutterBottom>
					Contact Me
				</Typography>
				<Typography
					variant="body1"
					align="center"
					color="textSecondary"
					component="p"
				>
					Get in touch via nikita@plotnikov.lv
				</Typography>

				{/* Social Media Icons */}
				<Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
					<IconButton
						aria-label="LinkedIn"
						component={Link}
						href="https://www.linkedin.com/in/nikita-plotnikovs/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedInIcon fontSize="large" />
					</IconButton>

					<IconButton
						aria-label="GitHub"
						component={Link}
						href="https://github.com/gallenmar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<GitHubIcon fontSize="large" />
					</IconButton>

					<IconButton
						aria-label="Email"
						component={Link}
						href="mailto:nikita@plotnikov.lv"
					>
						<EmailIcon fontSize="large" />
					</IconButton>
				</Box>
			</Container>
		</Box>
	);
}

export default Footer;
