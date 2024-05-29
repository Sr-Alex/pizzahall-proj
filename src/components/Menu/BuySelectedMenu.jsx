import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

import menuStyles from "./menuStyles";
import globalStyles from "../../globalStyles";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import UserAuthContext from "./../../contexts/UserAuthContext";

import BagIcon from "../../assets/icons/bagIcon.svg";
import { Toast } from "toastify-react-native";

export default function BuySelectedMenu() {
	const { userSignedIn } = useContext(UserAuthContext);
	const { cartProducts, getTotalValue, clearCartProducts } =
		useContext(ShoppingCartContext);

	const handleBuy = () => {
		if (!userSignedIn) {
			Toast.warn("Você precisa ter uma conta com os dados preenchidos");
			router.navigate("(main)/Profile");

			return;
		}

		if (!cartProducts.length) {
			Toast.warn("Seu carrinho está vazio.");
			return;
		}

		clearCartProducts();
		Toast.success("Seu pedido foi enviado!");
	};

	return (
		<View style={menuStyles.BuySelectedMenu}>
			<Text
				style={[
					globalStyles.fontSizes.spacedLabel,
					{ color: globalStyles.colors.black },
				]}>
				R$
				{cartProducts ? getTotalValue() : ""}
			</Text>
			<Pressable onPress={handleBuy} style={menuStyles.buyMenuButton}>
				<BagIcon
					width={32}
					height={32}
					fill={globalStyles.colors.offWhite}
				/>
			</Pressable>
		</View>
	);
}
