import { FC, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routerConfig } from "shared/config/routeConfig/RouteConfig";

export const AppRouter: FC = () => {

    return (
        <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {
                        routerConfig.map(({ element, path }) => (                        
                            <Route key={path} path={path} element={element} />
                        ))
                    }
                </Routes>
        </Suspense>
 );
}