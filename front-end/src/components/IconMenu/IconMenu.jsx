import styles from "./IconMenu.module.css";
import LIKES_ICON from "../../assets/thumb-up.svg";
import BASKET_ICON from "../../assets/basket.svg";
import { Link } from "react-router-dom";

const IconMenu = ({countOfCartItems}) => {
	const cartItems = countOfCartItems.length;
	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to="/ulubione">
					<img src={LIKES_ICON} />
				</Link>
			</li>
			<li>
				<Link to={`/koszyk`}>
					<img src={BASKET_ICON} />
					<div className={styles.numOfProducts}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	);
};
export default IconMenu;
