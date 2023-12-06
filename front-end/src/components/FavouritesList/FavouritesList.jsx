import style from "./FavouritesList.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";
const FavouritesList = ({ favourites }) => {
	return (
		<CenteredContent>
			<div className={style.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{favourites.map((favourite) => {
						return <FavouriteProduct key={favourite.id} favourite={favourite} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
};
export default FavouritesList;
