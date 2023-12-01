import styles from "./CategoryMenu.module.css";
import { NavLink } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

const CategoryMenu = () => {
	return (
		<div className={styles.categoryMenu}>
			<ul >
				{CATEGORIES.map((category) => {
					return (
						<li key={category.path}>
							<NavLink to={category.path}>{category.categoryName}</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default CategoryMenu;
