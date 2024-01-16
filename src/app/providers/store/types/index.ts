export interface Task {
	id: string;
	title: string;
	description: string;
	createAt: string;
}

export interface IToDoStore {
	tasks: Task[];
	createTask: (title: string, description: string) => void;
	updateTask: (id: string, title: string, description: string) => void;
	removeTask: (id: string) => void;
}
