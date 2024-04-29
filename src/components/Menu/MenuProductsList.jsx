import { useContext } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

import { ShoppingCartContext } from "./../../contexts/ShoppingCartContext";

import CloseIcon from "../../assets/icons/closeIcon.svg";
import menuStyles from "./menuStyles";

const ShowMenuProduct = ({ product, pressHandler }) => (
	<View
		style={menuStyles.ShowMenuProduct}>
		<View style={{ flexDirection: "row", gap: 16 }}>
			<Text>{product.name}</Text>
			<Text>{product.size}</Text>
			<Text>{product.price}</Text>
			<Text>{product.quantity}</Text>
		</View>
		<Pressable onPress={() => pressHandler(product)}>
			<CloseIcon
				width={24}
				height={24}
				fill={globalStyles.colors.black}
			/>
		</Pressable>
	</View>
);

export default function MenuProductList({}) {
	const { cartProducts, removeProductFromAllCart } =
		useContext(ShoppingCartContext);

	const handleDeleteProduct = (product) => {
		removeProductFromAllCart(product);
	};

	return (
		<View style={menuStyles.MenuProductList}>
			<FlatList
				data={cartProducts}
				renderItem={({ item }) => (
					<ShowMenuProduct
						product={item}
						pressHandler={handleDeleteProduct}
					/>
				)}
                keyExtractor={(_, index) => index}
				showsVerticalScrollIndicator={true}
				alwaysBounceVertical={true}
                bounces={true}
			/>
		</View>
	);
}
