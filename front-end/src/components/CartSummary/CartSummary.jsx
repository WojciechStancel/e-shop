import styles from "./CartSummary.module.css";
import FullWidthBtn from "../../components/FullWidthBtn/FullWidthBtn";
import DELIVERY_ICON from "../../assets/delivery.svg";

const CartSummary = ({ products }) => {
	const deliveryCost = 20;
	const minSumForDelivery = 450;

	let sum = 0;

    products.forEach((product) => {
        sum += product.pricePLN;
    })

    const totalCost = sum > minSumForDelivery ? sum : sum + deliveryCost

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produktów</p>
				<p>{sum}zł</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy:</p>
				<p>{sum > minSumForDelivery ? 0 : deliveryCost}</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Do zapłaty:</p>
				<p>{totalCost}zł</p>
			</div>
			<FullWidthBtn>Do kasy</FullWidthBtn>
			<div className={styles.deliveryInfo}>
				<img src={DELIVERY_ICON} />
				<p>Darmowa dostawa od: {minSumForDelivery}zł</p>
			</div>
		</div>
	);
};
export default CartSummary;
