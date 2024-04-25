import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";

import globalStyles from "../../../globalStyles";

import { getStore } from "../../../services/api/storeApi";

import MenuContainer from "../../../components/Menu/MenuContainer";

export default function StoreContainer() {
	const { id } = useLocalSearchParams();
	const [storeInfos, setStoreInfos] = useState({});

	const getStoreInfo = async () => {
		const response = await getStore(id);

		if (!response) return;

		setStoreInfos(response);
	};

	useEffect(() => {
		getStoreInfo();
	}, []);

	return (
		<SafeAreaView style={styles.contentContainer}>
			<MenuContainer store={storeInfos} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",
		paddingVertical: 16,

		width: "100%",
		height: "100%",

		backgroundColor: globalStyles.colors.orange,
	},
});
