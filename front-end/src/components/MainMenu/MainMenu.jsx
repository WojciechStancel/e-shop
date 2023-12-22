import { NavLink } from "react-router-dom";
import styles from "./MainMenu.module.css";
import { GENDER_CATEGORY } from "../../constants/categories";
import MOBILE_BTN from "../../assets/menu-2.svg";
import CLOSE_BTN from "../../assets/x.svg";
import { useRef, useState } from "react";
const MainMenu = () => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const navRef = useRef();
	const showNavbar = () => {
		navRef.current.classList.toggle(`${styles.mobileNav}`);
		setMobileOpen(!mobileOpen);
	};

	const closeNavbar = () => {
		navRef.current.classList.remove(`${styles.mobileNav}`);
		setMobileOpen(false);
	};
	return (
		<>
			<ul className={`${styles.mainMenu}`} ref={navRef}>
				{GENDER_CATEGORY.map((category) => {
					return (
						<li key={category.path}>
							<NavLink to={category.path} onClick={closeNavbar}>
								{category.categoryName}
							</NavLink>
						</li>
					);
				})}
			</ul>
			<button onClick={showNavbar} className={`${styles.navBtn}`}>
				<img
					src={mobileOpen ? CLOSE_BTN : MOBILE_BTN}
					alt="mobile nav icon"
					width={30}
					height={30}
				/>
			</button>
		</>
	);
};
export default MainMenu;
