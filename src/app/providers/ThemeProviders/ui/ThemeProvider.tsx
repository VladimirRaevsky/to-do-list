import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
	LOCAL_STORAGE_THEME_KEY,
	Theme,
	ThemeContext,
} from "../lib/ThemeContext";

interface ThemeProviderProps {
	children?: ReactNode;
	themeProps?: Theme;
}

const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, themeProps }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	useEffect(() => {
		document.documentElement.dataset.theme = themeProps ?? theme;
	}, [theme, themeProps]);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme,
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;
