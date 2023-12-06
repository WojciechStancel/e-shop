import style from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/x.svg";
import CART_ICON from "../../assets/basket.svg";
import { useFetcher } from "react-router-dom";
import Price from "../Price/Price";

const FavouriteProduct = ({ favourite }) => {
	const product = favourite.product
	const {Form} = useFetcher()
	const price = <Price product={product}/>
	return (
		<div className={style.favouriteProduct}>
			<img src={product.photos[0]} alt="" />
			<div className={style.favouriteProductInfo}>
				<div className={style.topRow}>
					<h3>
						{product.brand} {product.productName}
					</h3>
					<p>{price}</p>
				</div>
				<p className={style.priceRow}>
					<span>Cena: </span>
					{price}
				</p>
				<div className={style.btnRow}>
					<Form action={`/delete-from-favourites/${favourite.id}`} method="DELETE">
					<button>
						<img src={REMOVE_ICON} />
						Usuń
					</button>
					</Form>
					<button>
						<img src={CART_ICON} />
						Dodaj do koszyka
					</button>
				</div>
			</div>
		</div>
	);
};
export default FavouriteProduct;
