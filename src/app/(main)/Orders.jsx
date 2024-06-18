import { useContext, useEffect, useRef, useState } from "react";
import { StyleSheet, View, ScrollView, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import { getPedidos } from "../../services/api/orderApi";

import OrdersList from "../../components/Orders/OrdersList";

import globalStyles from "../../globalStyles";
import OrderTitles from "../../components/Orders/OrderTitles";

const screenWidth = Dimensions.get("window").width;

export default function OrdersLayout() {
	const { userSignedIn, getId } = useContext(UserAuthContext);
	const [orders, setOrders] = useState([]);
	const [firstList, setFirstList] = useState(true);
	const _scrollView = useRef(null);

	const handleGetOrders = async () => {
		const userId = await getId();
		if (!userSignedIn || !userId) return;
		const response = await getPedidos(userId);

		if (!response) return;
		setOrders(response["Dados"]);
	};

	const handleScroll = (event) => {
		if (event.contentOffset.x > screenWidth / 2) {
			if (firstList) setFirstList(false);
		} else {
			if (!firstList) setFirstList(true);
		}
	};

	useEffect(() => {
		handleGetOrders();
	}, []);

	useEffect(() => {
		if (firstList) {
			_scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
		} else {
			_scrollView.current.scrollToEnd({
				animated: false,
			});
		}
	}, [firstList]);

	return (
		<SafeAreaView style={styles.contentContainer}>
			<OrderTitles firstList={firstList} setFirstList={setFirstList} />

			<View style={{ flex: 1, width: "100%" }}>
				<ScrollView
					ref={_scrollView}
					horizontal
					showsHorizontalScrollIndicator={false}
					snapToInterval={screenWidth}
					snapToAlignment="center"
					bounces={false}
					onScroll={(e) => handleScroll(e.nativeEvent)}>
					<View style={styles.orderListContainer}>
						<OrdersList
							userOrders={orders.filter(
								(order) => order["status"] == "Pendente"
							)}
						/>
					</View>
					<View style={styles.orderListContainer}>
						<OrdersList userOrders={orders.filter(order => order["status"] != "Pendente")} />
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		width: "100%",
		height: "100%",

		backgroundColor: globalStyles.colors.offWhite,
	},
	orderListContainer: {
		flex: 1,
		width: screenWidth,
	},
});
