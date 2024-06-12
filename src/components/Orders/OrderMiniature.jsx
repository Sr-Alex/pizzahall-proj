import { Image, Text, View } from "react-native";

import { useEffect, useState } from "react";
import { getProduct, getStore } from "../../services/api/storeApi";

import globalStyles from "../../globalStyles";
import orderStyles from "./orderStyles";
import storeStyles from "./../Stores/storeStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function OrderMiniature({ order = {} }) {
	const [storeInfos, setStoreInfos] = useState({});
	const [productInfos, setProductInfos] = useState({});

	const getInfos = async () => {
		if (!storeInfos || !productInfos) return;
		const [storeRes, productRes] = await Promise.all([
			getStore(order["pizzaria"]),
			getProduct(order["produtos"][0]["produto"]),
		]);
		console.log(productRes);

		setStoreInfos(storeRes);
		setProductInfos(productRes[0]);
	};

	useEffect(() => {
		getInfos();
	}, []);

	return (
		<View>
			<View style={orderStyles.OrderMiniature}>
				<View style={orderStyles.miniatureShow}>
					<View
						style={[
							globalStyles.components.roundedImgContainer,
							{ height: "100%" },
						]}>
						<Image
							source={PizzaLogo}
							style={globalStyles.components.img}
						/>
					</View>
					<View style={orderStyles.orderMark}>
						<Text style={orderStyles.orderMarkText}>
							{order["produtos"][0]["quantidade"] || NaN}
						</Text>
					</View>
				</View>
				<View style={orderStyles.miniatureInfos}>
					<Text style={storeStyles.miniatureTitle}>
						{storeInfos["nome"] || "..."}
					</Text>
					<Text style={storeStyles.miniatureText}>
						{productInfos["nome"] || "..."}
					</Text>
				</View>
			</View>
			<View
				style={[
					globalStyles.components.centeredBorder,
					{ backgroundColor: globalStyles.colors.gray },
				]}
			/>
		</View>
	);
}
