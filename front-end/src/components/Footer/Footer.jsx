import styles from "./Footer.module.css";
const currentYear = new Date().getFullYear()

const Footer = () => {
	return (
		<div className={styles.footer}>
			<p>&copy; {currentYear} FancyShop</p>
		</div>
	);
};
export default Footer;
