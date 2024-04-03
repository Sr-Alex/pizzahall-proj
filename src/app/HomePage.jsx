import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../globalStyles";

import MapPreview from "../components/Maps/MapPreview";
import StoresList from "../components/Stores/StoresList";

export default function HomePage() {
	return (
		<SafeAreaView style={styles.HomePage}>
			<Text style={styles.timeAtTop}>15:59</Text>
			<View style={styles.contentContainer}>
				<MapPreview />
				<StoresList />
			</View>
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

	contentContainer: {
		alignItems: "center",
		gap: 16,

		width: "90%",
		height: "85%",
		paddingTop: 8,
		paddingBottom: 16,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
