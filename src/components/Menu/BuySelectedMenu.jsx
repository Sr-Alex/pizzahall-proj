import { useContext } from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

import menuStyles from "./menuStyles";
import globalStyles from "../../globalStyles";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import UserAuthContext from './../../contexts/UserAuthContext';

import BagIcon from "../../assets/icons/bagIcon.svg";


export default function BuySelectedMenu() {
	const { userSignedIn } = useContext(UserAuthContext);
	const { cartProducts, getTotalValue } = useContext(ShoppingCartContext);

	const handleBuy = () => {
		if (!userSignedIn) return router.navigate("(main)/Profile");

		console.warn("produtos comprados")
	}

	return (
		<View style={menuStyles.BuySelectedMenu}>
			<Text
				style={[
					globalStyles.fontSizes.spacedTitle,
					{ color: globalStyles.colors.black},
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
