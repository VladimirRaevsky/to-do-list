import { type FC } from "react";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { CustomButtonProps } from "../types";
import cls from "./CustomButton.module.scss";

export const CustomButton: FC<CustomButtonProps> = (props) => {
	const { className = "", handleClick, disabled, children } = props;

	return (
		<button
			onClick={handleClick}
			className={ClassNames(cls.customButton, {}, [className])}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
