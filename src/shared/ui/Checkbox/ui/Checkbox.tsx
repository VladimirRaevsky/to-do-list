import { type FC } from "react";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { CheckboxProps } from "../types";
import cls from "./Checkbox.module.scss";

export const Checkbox: FC<CheckboxProps> = (props) => {
	const {
		className = "",
		title,
		checked,
		isProcess = false,
		isDone = false,
		handleChange,
	} = props;

	const mode: Record<string, boolean> = {
		[cls.сheckboxIsDone]: isDone,
		[cls.сheckboxIsProcess]: isProcess,
	};

	const uniqueId = `inputField_${Math.random().toString(36).slice(2, 9)}`;

	return (
		<div className={ClassNames(cls.сheckbox, {...mode}, [className])}>
			<input
				type="checkbox"
				id={uniqueId}
				checked={checked}
				onChange={handleChange}
			/>
			<label htmlFor={uniqueId}>{title}</label>
		</div>
	);
};
