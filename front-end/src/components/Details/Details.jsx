import styles from "./Details.module.css"
import CAR_ICON from "../../assets/delivery.svg";
import RETURN_ICON from "../../assets/package-import.svg";
import FullWidthBtn from "../FullWidthBtn/FullWidthBtn";
import Accordion from "../Accoridon/Accordion";

const Details = ({ product }) => {
    const accordionContent = [
        {
            title: 'Opis produktu',
            content: product.description,
        },
        {
            title: 'Wskazówki pielęgnacyjne',
            content: product.maintenanceInfo,
        }
    ]
	return (
		<div className={styles.details}>
			<h2 >{product.brand}</h2>
			<p className={styles.productName}>{product.productName}</p>
			<p className={styles.price}>{product.pricePLN}zł</p>
			<FullWidthBtn>Dodaj do koszyka</FullWidthBtn>

            <ul className={styles.additionalInfo}>
                <li>
                    <img src={CAR_ICON} />
                    Dostawa 24h
                </li>
                <li>
                    <img src={RETURN_ICON} />
                    Zwrot do 30 dni
                </li>
            </ul>
            <Accordion items={accordionContent}/>
		</div>
	);
};
export default Details;
