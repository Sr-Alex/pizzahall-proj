import { Text, TouchableOpacity, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import globalStyles from "../../globalStyles";

import { ShoppingCartContext } from "./../../contexts/ShoppingCartContext";

import AddIcon from "../../assets/icons/addIcon.svg";
import MinusIcon from "../../assets/icons/minusIcon.svg";
import productStyles from "./productStyles";

export default function SelectProduct({ selected }) {
	const {
		cartProducts,
		getProductInCart,
		addProductToCart,
		removeProductFromCart,
	} = useContext(ShoppingCartContext);

	const [productCount, setProductCount] = useState();

	const handleAdd = () => {
		if (!selected || !selected["id"] || !selected["size"]) return;
		addProductToCart(selected);
	};

	const handleRemove = () => {
		if (!selected || !selected["id"] || !selected["size"]) return;
		removeProductFromCart(selected);
	};

	const getProductCount = () => {
		const productInCart = getProductInCart(selected);

		if (!productInCart) return 0;

		return productInCart["quantity"];
	};

	useEffect(() => {
		setProductCount(getProductCount());
	}, [selected, cartProducts]);

	return (
		<View style={productStyles.SelectProduct}>
			<TouchableOpacity onPress={handleRemove}>
				<MinusIcon
					width={48}
					height={48}
					fill={globalStyles.colors.gray}
				/>
			</TouchableOpacity>

			<Text style={productStyles.SelectProductText}>{productCount}</Text>

			<TouchableOpacity onPress={handleAdd}>
				<AddIcon
					width={48}
					height={48}
					fill={globalStyles.colors.orange}
				/>
			</TouchableOpacity>
		</View>
	);
}
