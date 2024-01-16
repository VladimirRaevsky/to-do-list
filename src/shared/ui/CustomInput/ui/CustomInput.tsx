import { ChangeEvent, type FC } from "react";
import { CustomInputProps } from "../types";
import cls from "./CustomInput.module.scss";

export const CustomInput: FC<CustomInputProps> = (props) => {
	const { value, setValue } = props;

	return (
		<input
			className={cls.customInput}
			value={value}
			onChange={(e: ChangeEvent<HTMLInputElement>) =>
				setValue(e.target.value)
			}
		/>
	);
};
