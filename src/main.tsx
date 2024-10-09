import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./state/store";
import App from "./App.tsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#D79921",
		},
		secondary: {
			main: "#3D0B37",
		},
		success: {
			main: "#C0D684",
		},
		warning: {
			main: "#CBEAA6",
		},
		info: {
			main: "#F3F9D2",
		},
		background: {
			default: "#121212",
			paper: "#22181C",
		},
		text: {
			primary: "#ffffff",
		},
	},
	typography: {
		allVariants: {
			color: "#ffffff",
		},
	},
});

const bodyElement = document.body;
if (bodyElement) {
	bodyElement.style.backgroundColor = theme.palette.background.default;
}

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<Provider store={store}>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</Provider>
	</StrictMode>
);
