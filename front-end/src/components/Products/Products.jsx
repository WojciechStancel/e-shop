import style from "./Products.module.css";
import CenteredContent from "../CenteredContent/CenteredContent";
import Product from "../Product/Product";

const Products = ({ products, headerText }) => {
	return (
		<CenteredContent>
			<h2 className={style.bestsellersHeader}>{headerText}</h2>
			<div className={style.productsWrapper}>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</CenteredContent>
	);
};
export default Products;
