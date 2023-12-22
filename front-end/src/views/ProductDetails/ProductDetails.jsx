import FlexContainer from "../../components/FlexContainer/FlexContainer";
import ExpandableMenu from "../../components/ExpandableMenu/ExpandableMenu";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Photos from "../../components/Photos/Photos";
import Details from "../../components/Details/Details";
import { useLoaderData } from "react-router-dom";
import MobileFlexContainer from "../../components/MobileFlexContainer/MobileFlexContainer"

const ProductDetails = () => {
	const product = useLoaderData()

	return (

			<FlexContainer>
				<ExpandableMenu />
				<div style={{width: "100%"}}>
					<Breadcrumbs />
					<MobileFlexContainer>
						<Photos product={product} />
						<Details product={product} />
					</MobileFlexContainer>
				</div>
			</FlexContainer>

	);
};
export default ProductDetails;
