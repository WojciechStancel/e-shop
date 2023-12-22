import styles from "./Photos.module.css";
import { useState } from "react";

const Photos = ({ product }) => {
	const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);
	return (
		<>
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
		</>
	);
};
export default Photos;
