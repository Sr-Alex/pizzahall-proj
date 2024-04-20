import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

import MapPreview from "../../components/Maps/MapPreview";
import StoresList from "../../components/Stores/StoresList";

export default function home() {
	return (
		<SafeAreaView style={styles.contentContainer}>
				<MapPreview />
				<StoresList stores={Array.from({ length: 6 })} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		alignItems: "center",
		gap: 16,

		paddingTop: 8,
		paddingBottom: 32,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 16,
	},
});
