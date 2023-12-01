import styles from "./CurrencySelector.module.css"
import { CURRENCIES } from "../../constants/curriencies"

const CurrencySelector = () => {
  return (
    <select className={styles.currencySelector}>
        <option value={CURRENCIES.PLN}>{CURRENCIES.PLN}</option>
        <option value={CURRENCIES.USD}>{CURRENCIES.USD}</option>
    </select>
  )
}
export default CurrencySelector