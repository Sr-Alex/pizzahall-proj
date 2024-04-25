import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

import { getAllStores } from "./../../services/api/storeApi";

import MapPreview from "../../components/Maps/MapPreview";
import StoresList from "../../components/Stores/StoresList";

export default function home() {
	const [stores, setStores] = useState([]);

	const getAllStoresInfos = async () => {
		const response = await getAllStores();

		if (!response) return;

		setStores(response);
	};

	useEffect(() => {
		getAllStoresInfos();
	}, []);

	return (
		<SafeAreaView style={styles.contentContainer}>
			<MapPreview />
			<StoresList stores={stores} />
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
