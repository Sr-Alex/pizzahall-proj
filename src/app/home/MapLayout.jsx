import { StyleSheet, View } from "react-native";

import MapPreview from "../../components/Maps/MapPreview";
import StoresList from "../../components/Stores/StoresList";

export default function MapLayout() {
	return (
		<View style={styles.contentContainer}>
			<MapPreview />
			<StoresList />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",
		gap: 16,

		width: "90%",
		height: "90%",
		paddingTop: 8,
		paddingBottom: 16,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
