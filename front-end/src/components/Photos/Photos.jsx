import styles from "./Photos.module.css";
import FlexContainer from "../FlexContainer/FlexContainer";
import { useState } from "react";

const Photos = ({ product }) => {
	const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
	return (
		<FlexContainer>
			<div className={styles.thumbnails}>
				{product.photos.map((photo) => {
					return (
						<img
                            className={currentPhoto === photo ? styles.active : ""}
							onClick={() => {
								setCurrentPhoto(photo);
							}}
							src={photo}
							key={photo}
						/>
					);
				})}
			</div>
			<img className={styles.mainPhoto} src={currentPhoto} />
		</FlexContainer>
	);
};
export default Photos;
