import styles from "./CartSummary.module.css";
import FullWidthBtn from "../../components/FullWidthBtn/FullWidthBtn";
import DELIVERY_ICON from "../../assets/delivery.svg";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/curriencies";

const CartSummary = ({ products }) => {
	const [currency] = useContext(CurrencyContext)

	const deliveryCosts = {
		[CURRENCIES.USD]: 10,
		[CURRENCIES.PLN]: 49,
	}

	const minSumsForDelivery = {
		[CURRENCIES.USD]: 100,
		[CURRENCIES.PLN]: 450,
	}

	const currencySign = CURRENCY_SIGN[currency]



	const deliveryCost = deliveryCosts[currency];
	const minSumForDelivery = minSumsForDelivery[currency];

	let sum = 0;

    products.forEach((product) => {
        sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
    })

    const totalCost = sum > minSumForDelivery ? sum : sum + deliveryCost

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produktów</p>
				<p>{sum}{currencySign}</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy:</p>
				<p>{sum > minSumForDelivery ? 0 : deliveryCost}{currencySign}</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Do zapłaty:</p>
				<p>{totalCost}{currencySign}</p>
			</div>
			<FullWidthBtn>Do kasy</FullWidthBtn>
			<div className={styles.deliveryInfo}>
				<img src={DELIVERY_ICON} />
				<p>Darmowa dostawa od: {minSumForDelivery}{currencySign}</p>
			</div>
		</div>
	);
};
export default CartSummary;
