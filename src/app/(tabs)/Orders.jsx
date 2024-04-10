import { StyleSheet, View } from "react-native";

import globalStyles from "../../globalStyles";

import OrdersList from "../../components/Orders/OrdersList";

export default function OrdersLayout() {
	return (
		<View style={styles.contentContainer}>
			<OrdersList userOrders={Array.from({ length: 6 })} />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",

		width: "100%",
		height: "100%",
		paddingTop: 32,
		paddingBottom: 16,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
