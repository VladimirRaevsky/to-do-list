export interface CheckboxProps {
	className?: string;
    title: "выполнено" | "в процессе" | "ожидает",
    checked: boolean
    handleChange: () => void
    isProcess?: boolean
    isDone?: boolean
}