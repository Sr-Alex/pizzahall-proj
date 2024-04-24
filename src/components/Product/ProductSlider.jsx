import PagerView from "react-native-pager-view";
import productStyles from "./productStyles";
import ProductView from "./ProductView";

export default function ProductSlider({ products = [], setProduct }) {
	return (
		<PagerView
			orientation={"horizontal"}
			onPageSelected={(prod) =>
				setProduct(products[prod.nativeEvent.position])
			}
			initialPage={0}
			style={productStyles.ProductPager}>
			{products.map((prod, index) => (
				<ProductView key={index} product={prod} />
			))}
		</PagerView>
	);
}
