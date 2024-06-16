import { FlatList, View } from "react-native";

import orderStyles from "./orderStyles";
import OrderMiniature from "./OrderMiniature";

export default function OrdersList({ userOrders = [] }) {
	return (
		<View style={orderStyles.OrdersList}>
			<FlatList
				data={userOrders}
				renderItem={({ item }) => <OrderMiniature order={item} />}
				keyExtractor={(_, index) => index}
			/>
		</View>
	);
}
