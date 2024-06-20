import { useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";

import OrderMiniature from "./OrderMiniature";

import orderStyles from "./orderStyles";

export default function OrdersList({ userOrders = [], getOrders }) {
	const [refreshing, setRefreshing] = useState(false);

	const refreshFunc = async () => {
		setRefreshing(true);
		await getOrders();
		setRefreshing(false);
	};

	return (
		<FlatList
			style={orderStyles.OrdersList}
			ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
			data={userOrders}
			refreshControl={
				<RefreshControl
					refreshing={refreshing}
					onRefresh={refreshFunc}
				/>
			}
			renderItem={({ item }) => <OrderMiniature order={item} />}
			keyExtractor={(_, index) => index}
		/>
	);
}
