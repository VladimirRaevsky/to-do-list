import { useToDoStore } from "app/providers/store/useToDoStore";
import { useState, type FC } from "react";
import { TaskCard } from "shared/ui/TaskCard";
import { ToDoListProps } from "../types";
import cls from "./ToDoList.module.scss";

export const ToDoList: FC<ToDoListProps> = (props) => {
	const [tasks, removeTask, updateTask] = useToDoStore((state) => [
		state.tasks,
		state.removeTask,
		state.updateTask,
	]);

	const [titleValue, setTitleValue] = useState("");
	const [descriptionValue, setDescriptionValue] = useState("");

	const [isEditMode, setEditMode] = useState(false);

	function handleRemoveTask(id: string) {
		removeTask(id);
	}

	function handleUpdateTack(id: string) {
		updateTask(id, titleValue, descriptionValue);
	}

	function handleEditMode() {
		setEditMode(!isEditMode);
	}

	return (
		<section className={cls.wrapper}>
			{!tasks.length ? (
				<p className={cls.wrapperP}>Задач нет!!</p>
			) : (
				tasks.map((el) => {
					return (
						<TaskCard
							key={el.id}
							title={el.title}
							description={el.description}
							isEditMode={isEditMode}
							handleEditMode={handleEditMode}
							handleRemoveTask={() => handleRemoveTask(el.id)}
						/>
					);
				})
			)}
		</section>
	);
};
