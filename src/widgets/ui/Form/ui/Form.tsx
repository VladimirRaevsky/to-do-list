import { useToDoStore } from "app/providers/store/useToDoStore";
import { IToDoStore } from "app/providers/store/types";
import { ChangeEvent, useState, type FC } from "react";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { CustomButton } from "shared/ui/CustomButton";
import { CustomInput } from "shared/ui/CustomInput/ui/CustomInput";

import cls from "./Form.module.scss";

interface FormProps {
	className?: string;
}

export const Form: FC<FormProps> = (props) => {
	const { className = "" } = props;

	const createTask = useToDoStore((state) => state.createTask);

	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");

	function handleSubmit(e: ChangeEvent<HTMLFormElement>) {
		e.preventDefault();

		if (title && description) {
			createTask(title, description);

			setTitle("");
			setDescription("");
		}
	}

	return (
		<form
			className={ClassNames(cls.form, {}, [className])}
			onSubmit={handleSubmit}
		>
			<CustomInput value={title} setValue={setTitle} />
			<CustomInput value={description} setValue={setDescription} />
			<CustomButton type="submit" disabled={!title || !description}>
				Добавить
			</CustomButton>
		</form>
	);
};
