import { type FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { arrayPaths } from "../const";
import cls from "./Nav.module.scss";

export const Nav: FC = () => {
	const location = useLocation();

	const isActive = (path: string) => location.pathname === path;

	return (
		<nav className={ClassNames(cls.nav, {}, [])}>
			<ul className={cls.list}>
				{arrayPaths.map((el) => {
					return (
						<li key={el.to} className={cls.item}>
							<Link
								to={el.to}
								className={isActive(el.to) ? cls.active : ""}
							>
								{el.description}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
