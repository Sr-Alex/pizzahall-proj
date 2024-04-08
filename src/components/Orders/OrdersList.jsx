import { ScrollView, View } from "react-native";

import orderStyles from "./orderStyles";
import OrderMiniature from "./OrderMiniature";
import globalStyles from "../../globalStyles";

export default function OrdersList({ userOrders = [] }) {
	return (
		<View style={orderStyles.OrdersList}>
			<ScrollView style={globalStyles.components.scroller}>
				{userOrders.map((order, index) => (
					<OrderMiniature key={index} order={order} />
				))}
			</ScrollView>
		</View>
	);
}
