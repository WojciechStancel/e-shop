import style from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/x.svg";
import Price from "../Price/Price";


const CartProduct = ({ product }) => {
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
