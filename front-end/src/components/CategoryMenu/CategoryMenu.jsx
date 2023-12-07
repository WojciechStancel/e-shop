import styles from "./CategoryMenu.module.css";
import { NavLink, useParams } from "react-router-dom";
import { CATEGORIES } from "../../constants/categories";

const CategoryMenu = () => {
	const params = useParams();

	// if (Object.keys(params).length === 0 && params.constructor === Object) {
	// 	return <div className={styles.basketMenu}/>;
	// }

	return (
		<div className={styles.categoryMenu}>
			<ul>
				{CATEGORIES.map((category) => {
					return (
						<li key={category.path}>
							<NavLink to={`/${params.gender}/${category.path}`}>
								{category.categoryName}
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default CategoryMenu;
