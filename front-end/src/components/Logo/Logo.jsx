import styles from "./Logo.module.css";
import TSHIRT_ICON from "../../assets/tshirt.svg";
const Logo = () => {
	return (
		<h1 className={styles.logo}>
			Fancy Shop
			<img src={TSHIRT_ICON} />
		</h1>
	);
};
export default Logo;
