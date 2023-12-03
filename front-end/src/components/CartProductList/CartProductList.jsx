import style from "./CartProductList.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import CartProduct from "../CartProduct/CartProduct";
const CartProductList = ({ products }) => {
	return (
		<CenteredContent>
			<div className={style.favouritesList}>
				<h2>Koszyk</h2>
				<div>
					{products.map((product) => {
						return <CartProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
};
export default CartProductList;
