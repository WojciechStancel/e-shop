import styles from "./TopBar.module.css";

const TopBar = ({ children }) => {
	return (
			<div className={`${styles.topBar}`}>
				<span className={styles.container}>
					{children}
				</span>

			</div>

	);
};
export default TopBar;
