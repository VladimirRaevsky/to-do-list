import { ReactNode } from "react";

export type TypeButton = "button" | "submit";

export interface CustomButtonProps {
	className?: string;
	children: ReactNode;
	type: TypeButton;
	handleClick?: () => void;
	disabled: boolean;
}
