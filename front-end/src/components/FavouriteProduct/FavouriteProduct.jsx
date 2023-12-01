import style from "./FavouriteProduct.module.css";
import REMOVE_ICON from "../../assets/x.svg";
import CART_ICON from "../../assets/basket.svg";

const FavouriteProduct = ({ product }) => {
	return (
		<div className={style.favouriteProduct}>
			<img src={product.photos[0]} alt="" />
			<div className={style.favouriteProductInfo}>
				<div className={style.topRow}>
					<h3>
						{product.brand} {product.productName}
					</h3>
					<p>{product.pricePLN}zł</p>
				</div>
				<p className={style.priceRow}>
					<span>Cena: </span>
					{product.pricePLN}zł
				</p>
				<div className={style.btnRow}>
					<button>
						<img src={REMOVE_ICON} />
						Usuń
					</button>
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
