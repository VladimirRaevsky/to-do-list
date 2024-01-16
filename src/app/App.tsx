import { FC } from "react";
import { useTheme } from "app/providers/ThemeProviders";
import { AppRouter } from "app/providers/router";

import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";

import { Header } from "widgets/ui/Header";
import { Container } from "shared/ui/Container";

import "./styles/index.scss";

export const App: FC = () => {
	const { theme } = useTheme();

	return (
		<div className={ClassNames("app", {}, [theme])}>
			<Header />
			<main>
				<Container>
					<AppRouter />
				</Container>
			</main>
		</div>
	);
};
