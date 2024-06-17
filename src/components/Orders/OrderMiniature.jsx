import { Image, Text, View } from "react-native";

import { useState } from "react";

import globalStyles from "../../globalStyles";
import orderStyles from "./orderStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function OrderMiniature({ order = {} }) {
	const [orderProducts, setOrderProducts] = useState(order["produtos"] || []);
	const [orderDate, setOrderDate] = useState(order["create"] || null);
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
							{orderProducts.length || NaN}
						</Text>
					</View>
				</View>
				<View>
					<Text style={orderStyles.orderTitle}>
						{order["nome_pizzaria"] || "NoName"}
					</Text>
					<Text style={orderStyles.orderInfo}>
						{order["precoFinal"].toFixed(2) + "R$" || NaN}
					</Text>
					<Text style={orderStyles.orderInfo}>
						{orderDate
							? `${orderDate.getHours()}:${orderDate.getMinutes()}`
							: NaN}
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
