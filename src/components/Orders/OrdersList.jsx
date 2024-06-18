import { FlatList, Text, View } from "react-native";

import OrderMiniature from "./OrderMiniature";

import orderStyles from "./orderStyles";

export default function OrdersList({ userOrders = [] }) {
	return (
		<FlatList
			style={orderStyles.OrdersList}
			ItemSeparatorComponent={() => <View style={{height: 16}} />}
			data={userOrders}
			renderItem={({ item }) => <OrderMiniature order={item} />}
			keyExtractor={(_, index) => index}
		/>
	);
}
