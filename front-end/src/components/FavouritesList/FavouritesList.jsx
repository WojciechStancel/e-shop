import style from "./FavouritesList.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import FavouriteProduct from "../FavouriteProduct/FavouriteProduct";
const FavouritesList = ({ products }) => {
	return (
		<CenteredContent>
			<div className={style.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map((product) => {
						return <FavouriteProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
};
export default FavouritesList;
