import Hero from "../../components/Hero/Hero";
import Products from "../../components/Products/Products";
import { useLoaderData } from "react-router-dom";

const MainPage = () => {


	const {bestsellers, heroImageUrl} = useLoaderData()

	return (
		<>
			<Hero heroImage={heroImageUrl} />
			<Products products={bestsellers} headerText="Nasze bestsellery" />
		</>
	);
};
export default MainPage;
