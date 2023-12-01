import style from "./BestSellers.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import Product from "../Product/Product";

const BestSellers = ({ products }) => {
	return (
		<CenteredContent>
			<h2 className={style.bestsellersHeader}>Nasze bestsellery</h2>
			<div className={style.productsWrapper}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</CenteredContent>
	);
};
export default BestSellers;
