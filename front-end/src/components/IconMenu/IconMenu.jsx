import styles from "./IconMenu.module.css";
import LIKES_ICON from "../../assets/thumb-up.svg";
import BASKET_ICON from "../../assets/basket.svg";
import { Link } from "react-router-dom";

const IconMenu = () => {
    const cartItems = 2;
	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to="/ulubione">
					<img src={LIKES_ICON} alt="" />
				</Link>
			</li>
			<li>
				<Link to="/koszyk">
					<img src={BASKET_ICON} alt="" />
                    <div className={styles.numOfProducts}>{cartItems}</div>
				</Link>
			</li>
		</ul>
	);
};
export default IconMenu;
