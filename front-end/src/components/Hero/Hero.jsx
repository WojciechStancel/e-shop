import style from "./Hero.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import FullWidthBtn from "../FullWidthBtn/FullWidthBtn";

const Hero = ({ heroImage }) => {
	return (
		<div
			className={style.hero}
			style={{ backgroundImage: `url(${heroImage})` }}>
			<CenteredContent>
				<div className={style.contentWrapper}>
					<h2>Promocja na Black Friday -40%</h2>
					<p>Najlepsze okazje!</p>
					<FullWidthBtn>Sprawdź!</FullWidthBtn>
				</div>
			</CenteredContent>
		</div>
	);
};
export default Hero;
