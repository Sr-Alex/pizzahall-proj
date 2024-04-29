import { Image, Text, View } from "react-native";

import globalStyles from "../../globalStyles";
import orderStyles from "./orderStyles";
import storeStyles from "./../Stores/storeStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function OrderMiniature({ order = {} }) {
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
							source={order["logo"] ? order["logo"] : PizzaLogo}
							style={globalStyles.components.img}
						/>
					</View>
					<View style={orderStyles.orderMark}>
						<Text style={orderStyles.orderMarkText}>M</Text>
					</View>
					<View
						style={[
							orderStyles.orderMark,
							{ backgroundColor: globalStyles.colors.gray },
						]}>
						<Text style={orderStyles.orderMarkText}>Pendente</Text>
					</View>
				</View>
				<View style={orderStyles.miniatureInfos}>
					<Text style={storeStyles.miniatureTitle}>Store Name</Text>
					<Text style={storeStyles.miniatureText}>
						Descrição do pedido
					</Text>
					<Text style={storeStyles.miniatureText}>17:40</Text>
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
