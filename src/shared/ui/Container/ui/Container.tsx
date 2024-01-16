import { FC, useState } from "react";
import { IContainerProps } from "../types";
import cls from "./Container.module.scss";

export const Container: FC<IContainerProps> = (props) => {
	const { children } = props;

	return <div className={cls.container}>{children}</div>;
};
