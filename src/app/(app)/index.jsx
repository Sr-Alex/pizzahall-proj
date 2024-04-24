import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

import MapPreview from "../../components/Maps/MapPreview";
import StoresList from "../../components/Stores/StoresList";

const placeholder = [
	{
		id: "a912a063-2ef1-4878-86b4-66af3085779c",
		name: "Lorenso Pizzas",
		status: "aberto",
		horario: ["10:00", "22:00"],
		imgUrl: "https://picsum.photos/500",
	},
	{
		id: "99595765-908a-4a9c-bd5a-b96948cd6c4e",
		name: "Pizzaria Nordestina",
		status: "aberto",
		horario: ["", "21:00"],
		imgUrl: "https://picsum.photos/500",
	},
	{
		id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		name: "Pizzaria São Bento",
		status: "fechado",
		horario: ["08:00"],
		imgUrl: "https://picsum.photos/500",
	},
];

export default function home() {
	return (
		<SafeAreaView style={styles.contentContainer}>
			<MapPreview />
			<StoresList stores={placeholder} />
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
