import style from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/x.svg";


const CartProduct = ({ product }) => {
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
				
				</div>
			</div>
		</div>
	);
};
export default CartProduct;
