import styles from "./MobileFlexContainer.module.css";

const MobileFlexContainer = ({ children }) => {
	return <div className={styles.mobileFlexContainer}>{children}</div>;
};
export default MobileFlexContainer;
