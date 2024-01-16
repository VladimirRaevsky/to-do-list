import { FC } from "react";
import { Form } from "widgets/ui/Form";
import { ToDoList } from "widgets/ui/ToDoList";

import cls from "./MainePage.module.scss";

interface MainePageProps {
	className?: string;
}

const MainPage: FC<MainePageProps> = (props) => {
	const { className } = props;

	return (
		<div className={cls.mainePage}>
			<Form />
			<ToDoList />
		</div>
	);
};

export default MainPage;
