import { Pressable, Text, View } from "react-native";

import { useState } from "react";

import globalStyles from "../../globalStyles";
import orderStyles from "./orderStyles";

export default function OrderMiniature({ order = {} }) {
	return (
		<View style={orderStyles.OrderMiniature}>
			<View style={orderStyles.orderInfoBox}>
				<Text style={orderStyles.orderTitle}>
					{order["nome_pizzaria"] || "StoreName"}
				</Text>
				<Text style={orderStyles.orderInfo}>
					{order["status"] || "OrderStatus"}
				</Text>
			</View>
			<View
				style={[
					orderStyles.orderInfoBox,
					{ flexDirection: "row", justifyContent: "space-between" },
				]}>
				<Text style={orderStyles.orderMainInfos}>Produtos: </Text>
				<Text style={globalStyles.fontSizes.spacedLabel}>
					{order["produto"].length || "OrderQuantity"}
				</Text>
			</View>
			<View
				style={[
					orderStyles.orderInfoBox,
					{ flexDirection: "row", justifyContent: "space-between" },
				]}>
				<Text style={orderStyles.orderMainInfos}>Total: </Text>
				<Text style={globalStyles.fontSizes.spacedLabel}>
					{order["precoFinal"].toFixed(2) || "orderCost"}
				</Text>
			</View>
			<View style={orderStyles.orderButtonsContainer}>
				{order["status"] == "Pendente" && <Pressable style={orderStyles.orderButton} onPress={() => {}}>
					<Text style={orderStyles.orderButtonText}>Pagar</Text>
				</Pressable>}
				<Pressable style={orderStyles.orderButton} onPress={() => {}}>
					<Text style={orderStyles.orderButtonText}>Detalhes</Text>
				</Pressable>
			</View>
		</View>
	);
}
