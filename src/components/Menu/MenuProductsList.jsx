import { useContext } from "react";
import { FlatList, View } from "react-native";

import { ShoppingCartContext } from "./../../contexts/ShoppingCartContext";

import menuStyles from "./menuStyles";

import ShowMenuProduct from "./ShowMenuProduct";
import globalStyles from "../../globalStyles";

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
				ItemSeparatorComponent={() => (
					<View
						style={[
							globalStyles.components.centeredBorder,
							{
								backgroundColor: globalStyles.colors.gray,
								marginVertical: 12,
							},
						]}
					/>
				)}
				keyExtractor={(_, index) => index}
				showsVerticalScrollIndicator={true}
				alwaysBounceVertical={true}
				bounces={true}
				style={{paddingLeft: 4,paddingRight: 8}}
			/>
		</View>
	);
}
