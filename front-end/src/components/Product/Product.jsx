import style from "./Product.module.css";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
	return (
		<Link className={style.product}>
			<img src={product.photos[0]} />
			<h3>{product.productName}</h3>
			<p>{product.pricePLN}</p>
            <div className={style.heart}></div>
		</Link>
	);
};
export default Product;
