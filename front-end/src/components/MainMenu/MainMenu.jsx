import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css"
import { GENDER_CATEGORY } from "../../constants/categories";
const MainMenu = () => {

	return (
		<ul className={styles.mainMenu}>
			{GENDER_CATEGORY.map((category) => {
				return (
					<li key={category.path}>
						<NavLink to={category.path}>{category.categoryName}</NavLink>
					</li>
				);
			})}
		</ul>
	);
};
export default MainMenu;
