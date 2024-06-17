import { useContext, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";

import { ShoppingCartContext } from "../../contexts/ShoppingCartContext";
import { UserAuthContext } from "./../../contexts/UserAuthContext";

import { createPedido } from "../../services/api/orderApi";

import menuStyles from "./menuStyles";
import globalStyles from "../../globalStyles";

import BagIcon from "../../assets/icons/bagIcon.svg";

export default function BuySelectedMenu({ store }) {
	const { userSignedIn, getId } = useContext(UserAuthContext);
	const { cartProducts, getTotalValue, clearCartProducts } =
		useContext(ShoppingCartContext);
	const [total, setTotal] = useState(0.0);

	const handleBuy = async () => {
		if (!userSignedIn) {
			Toast.warn("Você precisa ter uma conta com os dados preenchidos");
			router.navigate("(main)/Profile");

			return;
		}

		if (!cartProducts.length) {
			Toast.warn("Seu carrinho está vazio.");
			return;
		}

		createPedido({
			cliente: await getId(),
			pizzaria: store["id"],
			produtos: Array.from(cartProducts).map((product) => {
				return {
					produto: product.id,
					quantidade: product.quantity,
				};
			}),
			precoInicial: getTotalValue(),
			precoFinal: getTotalValue(),
		});

		clearCartProducts();
		Toast.success("Seu pedido foi enviado!");
	};

	useEffect(() => {
		setTotal(getTotalValue());
	}, [cartProducts]);

	return (
		<View style={menuStyles.BuySelectedMenu}>
			<Text
				style={[
					globalStyles.fontSizes.spacedLabel,
					{ color: globalStyles.colors.black },
				]}>
				R$
				{cartProducts ? total : ""}
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
