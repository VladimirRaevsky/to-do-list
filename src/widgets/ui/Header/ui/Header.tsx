import { useTheme } from "app/providers/ThemeProviders";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { CustomButton } from "shared/ui/CustomButton";
import cls from "./Header.module.scss";
import { Nav } from "./Nav/ui/Nav";

export function Header() {
	const { themeToggleHandler } = useTheme();

	return (
		<header className={cls.header}>
			<h1 className={ClassNames(cls.title, {}, [])}>Список задач</h1>
			<Nav />
			<CustomButton
				handleClick={themeToggleHandler}
				type="button"
				className={cls.button}
				disabled={false}
			>
				Смена темы
			</CustomButton>
		</header>
	);
}
