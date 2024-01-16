import { App } from "app";
import { ThemeProvider } from "app/providers/ThemeProviders";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
