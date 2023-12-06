import style from "./Product.module.css";
import { Link } from "react-router-dom";

const ENDPOINT_TO_PATH_MAPPING = {
	women: "kobieta",
	men: "mezczyzna",
	children: "dziecko",
};

const Product = ({ product }) => {
	return (
		<Link
			to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
				product.subcategory
			}/${product.id}`}
			className={style.product}>
			<img src={product.photos[0]} />
			<h3>{product.productName}</h3>
			<p>{product.pricePLN}</p>
			<div className={style.heart}></div>
		</Link>
	);
};
export default Product;
