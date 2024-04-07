import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";

import globalStyles from "../../globalStyles";

import NavBar from "../../components/NavBar/NavBar";

export default function HomeLayout() {
	return (
		<SafeAreaView style={styles.HomePage}>
			<Text style={styles.timeAtTop}>15:59</Text>
			<Slot />
			<NavBar />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	HomePage: {
		alignItems: "center",

		width: "100%",
		height: "100%",

		backgroundColor: globalStyles.colors.snowWhite,
	},

	timeAtTop: {
		width: "100%",
		height: 32,
		paddingHorizontal: 8,

		fontSize: 20,
		fontWeight: "bold",
		textAlign: "right",

		color: globalStyles.colors.darkPurple,
	},
});
