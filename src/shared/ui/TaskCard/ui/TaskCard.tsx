import { useState, type FC } from "react";
import { ClassNames } from "shared/lib/helpers/ClassNames/ClassNames";
import { Checkbox } from "shared/ui/Checkbox";
import { Icon } from "@iconify/react";
import RemoveIcon from "@iconify/icons-pajamas/remove";
import Edit from "../images/edit.svg";
import Editing from "../images/editing.svg";
import { TaskCardProps } from "../types";

import cls from "./TaskCard.module.scss";

export const TaskCard: FC<TaskCardProps> = (props) => {
	const {
		className = "",
		title,
		description,
		isEditMode,
		handleRemoveTask,
	} = props;

	const [isDone, setIsDone] = useState(false);
	const [isProcess, setIsProcess] = useState(false);

	function handleChangeDone() {
		setIsProcess(false);
		setIsDone(!isDone);
	}

	function handleChangeProcess() {
		setIsProcess(!isProcess);
	}

	const mode: Record<string, boolean> = {
		[cls.taskCardModeIsDone]: isDone,
		[cls.taskCardModeIsProcess]: isProcess,
	};

	return (
		<article className={ClassNames(cls.taskCard, { ...mode }, [className])}>
			<div className={cls.taskCardIconBox}>
				{!isEditMode ? (
					<Edit className={cls.taskCardIcon} />
				) : (
					<Editing className={cls.taskCardIcon} />
				)}
			</div>
			<section className={cls.taskCardBox}>
				<div className={cls.taskCardContent}>
					{isEditMode ? (
						<>
							<input
								className={cls.taskCardTitle}
							/>
							<input
								className={cls.taskCardDescr}
							/>
						</>
					) : (
						<>
							<h2 className={cls.taskCardTitle}>{title}</h2>
							<div className={cls.taskCardDescr}>
								{description}
							</div>
						</>
					)}
				</div>

				<div className="taskCardCheckboks">
					<Checkbox
						title="выполнено"
						checked={isDone}
						isDone={isDone}
						handleChange={handleChangeDone}
					/>{" "}
					{isDone ? (
						<Icon
							icon={RemoveIcon}
							width="15"
							className={cls.taskCardIcon}
							onClick={handleRemoveTask}
						/>
					) : (
						<Checkbox
							title={isProcess ? "в процессе" : "ожидает"}
							checked={isProcess}
							isProcess={isProcess}
							handleChange={handleChangeProcess}
						/>
					)}
				</div>
			</section>
		</article>
	);
};
