export type TypeStatus = "статус";

export interface TaskCardProps {
	className?: string;
	title: string;
	description: string;
	isEditMode: boolean;
	handleRemoveTask: () => void;
    handleEditMode: () => void
}
