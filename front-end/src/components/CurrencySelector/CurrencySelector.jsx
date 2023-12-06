import styles from "./CurrencySelector.module.css";
import { CURRENCIES } from "../../constants/curriencies";
import { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";

const CurrencySelector = () => {
	const [currency, setCurrency] = useContext(CurrencyContext);
	return (
		<select
			value={currency}
			onChange={(e) => {
				setCurrency(e.currentTarget.value);
				localStorage["selected_currency"] = e.target.value;
			}}
			className={styles.currencySelector}>
			<option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
			<option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
		</select>
	);
};
export default CurrencySelector;
