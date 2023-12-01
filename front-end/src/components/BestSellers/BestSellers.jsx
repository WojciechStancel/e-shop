import CenteredContent from "../CenteredContent/CenteredContent";
import Product from "../Product/Product";

const BestSellers = ({ products }) => {
	return (
		<CenteredContent>
			<h2>Bestsellery</h2>
			<div>
				{products.map((product) => {
					return <Product key={product.id} product={product} />;
				})}
			</div>
		</CenteredContent>
	);
};
export default BestSellers;
