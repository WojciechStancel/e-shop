import style from "./Product.module.css";
import { Link, useFetcher } from "react-router-dom";

import Price from "../Price/Price";

const ENDPOINT_TO_PATH_MAPPING = {
	women: "kobieta",
	men: "mezczyzna",
	children: "dziecko",
};

const Product = ({ product }) => {
	const { Form } = useFetcher();
	return (
		<Link
			to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
				product.subcategory
			}/${product.id}`}
			className={style.product}>
			<img src={product.photos[0]} />
			<h3>{product.productName}</h3>
			<p>
				<Price product={product} />
			</p>
			<Form
				onClick={(e) => {
					e.stopPropagation();
				}}
				method="POST"
				action={`/add-to-favourites/${product.id}`}>
				<button>
					<div className={style.heart}></div>
				</button>
			</Form>
		</Link>
	);
};
export default Product;
