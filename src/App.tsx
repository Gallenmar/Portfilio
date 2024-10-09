import { useEffect } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import { Container, Box } from "@mui/material";

import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
// import "./App.scss";

function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					minHeight: "100vh",
				}}
			>
				<Header />
				<Container
					component="main"
					sx={{
						flexGrow: 1,
						padding: 3,
						my: 6,
					}}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/portfolio" element={<Portfolio />} />
						<Route path="/project/:id" element={<ProjectDetails />} />
					</Routes>
				</Container>
				<Footer />
			</Box>
		</Router>
	);
}

export default App;
