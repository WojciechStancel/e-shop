import { useLoaderData } from "react-router-dom";
import FavouritesList from "../../components/FavouritesList/FavouritesList";

const Favourites = () => {
	const favouritesProducts = useLoaderData();
	return <FavouritesList favourites={favouritesProducts} />;
};
export default Favourites;
