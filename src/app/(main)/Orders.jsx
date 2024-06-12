import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../../globalStyles";

import OrdersList from "../../components/Orders/OrdersList";
import { useContext, useEffect, useState } from "react";
import { UserAuthContext } from "../../contexts/UserAuthContext";
import { getPedidos } from "../../services/api/orderApi";

export default function OrdersLayout() {
	const { userSignedIn, getId } = useContext(UserAuthContext);
	const [orders, setOrders] = useState([]);

	const handleGetPedidos = async () => {
		const userId = await getId();
		if (!userSignedIn || !userId) return;
		const response = await getPedidos(userId);

		if (!response) return;
		setOrders(response);
	};

	useEffect(() => {
		handleGetPedidos();
	});
	return (
		<SafeAreaView style={styles.contentContainer}>
			<OrdersList userOrders={orders} />
		</SafeAreaView>
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
