export interface IPaths {
	to: string;
	description: string;
}

export const arrayPaths: IPaths[] = [
	{
		to: "/",
		description: "Добавить задачу",
	},
	{
		to: "/done",
		description: "Выполнено",
	},
];
