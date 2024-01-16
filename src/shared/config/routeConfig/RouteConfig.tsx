import { RouteProps } from "react-router-dom";

import { DonePage } from "pages/DonePage";
import { MainPage } from "pages/MainPage";

export enum AppRoutes {
	MAIN = "main",
	DONE = "done",
}

export const RoutePaths: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: "/",

	[AppRoutes.DONE]: "/done",
};

export const routerConfig: RouteProps[] = [
	{ path: RoutePaths[AppRoutes.MAIN], element: <MainPage /> },

	{ path: RoutePaths[AppRoutes.DONE], element: <DonePage /> },
];
