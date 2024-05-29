import { Pressable, View } from "react-native";
import PagerView from "react-native-pager-view";

import globalStyles from "../../globalStyles";
import productStyles from "./productStyles";

import ArrowIcon from "../../assets/icons/arrowIcon.svg";

import ProductView from "./ProductView";
import { useEffect, useRef, useState } from "react";

export default function ProductSlider({ products = [], setProduct }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slider = useRef(null);

	const resetSlider = () => {
		slider.current.setPage(0);
	};

	const handleNextProduct = () => {
		slider.current.setPage(currentIndex + 1);
	};

	const handlePrevProduct = () => {
		slider.current.setPage(currentIndex - 1);
	};

	const handlePageSelect = (prod) => {
		const productIndex = prod.nativeEvent.position;
		setCurrentIndex(productIndex);
		setProduct(products[productIndex]);
	};

	useEffect(() => {
		resetSlider();
		console.log(products)
	}, [products]);

	return (
		<View style={productStyles.ProductSlider}>
			<Pressable
				onPress={handlePrevProduct}
				style={{ transform: [{ scaleX: -1 }] }}>
				<ArrowIcon
					width={48}
					height={48}
					fill={globalStyles.colors.lightGray}
				/>
			</Pressable>

			<PagerView
				ref={slider}
				orientation={"horizontal"}
				onPageSelected={(prod) => handlePageSelect(prod)}
				initialPage={0}
				style={productStyles.ProductPager}>
				{Array.from(products).map((prod, index) => (
					<ProductView key={index} product={prod} />
				))}
			</PagerView>

			<Pressable onPress={handleNextProduct}>
				<ArrowIcon
					width={48}
					height={48}
					fill={globalStyles.colors.lightGray}
				/>
			</Pressable>
		</View>
	);
}
