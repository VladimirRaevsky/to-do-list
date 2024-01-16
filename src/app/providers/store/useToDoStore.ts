import { generateId } from "shared/lib/helpers/generateId/GenerateId";
import { create } from "zustand";
import { Task, IToDoStore } from "./types";

export const useToDoStore = create<IToDoStore>((set, get) => ({
	tasks: [
		{
			id: "1",
			description: "fjdskjgkjdhfg",
			title: "fhjgjh",
			createAt: String(new Date()),
		},
	],
	createTask: (title: string, description: string) => {
		const { tasks } = get();

		const newTask: Task = {
			id: generateId(),
			title,
			description,
			createAt: String(new Date()),
		};

		set({
			tasks: [newTask].concat(tasks),
		});
	},
	updateTask: (id: string, title: string, description: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.map((el) => {
				if (el.id === id) {
					return {
						...el,
						title: title,
						description: description,
					};
				} else {
					return {
						...el,
					};
				}
			}),
		});
	},
	removeTask: (id: string) => {
		const { tasks } = get();

		set({
			tasks: tasks.filter((el) => el.id !== id),
		});
	},
}));
