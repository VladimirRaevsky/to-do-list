import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";

export interface UseThemeResult {
    theme: any;
    themeToggleHandler: () => void;
}

export function useTheme(): UseThemeResult  {
    const { theme, setTheme } = useContext(ThemeContext);

    const themeToggleHandler = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

        setTheme?.(newTheme)

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    }

    return {
        theme,
        themeToggleHandler
    }
}