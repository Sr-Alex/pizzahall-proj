import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../../globalStyles";

import MapPreview from "../../components/Maps/MapPreview";
import StoresList from "../../components/Stores/StoresList";

export default function home() {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.TimeAtTop}>15:59</Text>
			<View style={styles.contentContainer}>
				<MapPreview />
				<StoresList stores={Array.from({ length: 6 })} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
		alignItems: "center",
		gap: 16,

		paddingTop: 8,
		paddingBottom: 32,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 16,
	},

	TimeAtTop: {
		height: 32,
		paddingRight: 8,

		fontSize: 20,
		fontWeight: "600",
		textAlign: "right",

		color: globalStyles.colors.black,
	},
});
