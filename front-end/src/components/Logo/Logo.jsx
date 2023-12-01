import styles from "./Logo.module.css";
import BUILDING_ICON from "../../assets/building-store.svg";
const Logo = () => {
	return (
		<h1 className={styles.logo}>
			Best
			<span>
				Shop <img src={BUILDING_ICON} />
			</span>
		</h1>
	);
};
export default Logo;
