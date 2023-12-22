import { useContext } from "react";
import CartProductList from "../../components/CartProductList/CartProductList";
import CartSummary from "../../components/CartSummary/CartSummary";
import MobileFlexContainer from "../../components/MobileFlexContainer/MobileFlexContainer";
import { CartContext } from "../../contexts/CartContext";

const Cart = () => {
	const [cartItems] = useContext(CartContext);
	return (
		<MobileFlexContainer>
			<CartProductList products={cartItems} />
			<CartSummary products={cartItems} />
		</MobileFlexContainer>
	);
};
export default Cart;
