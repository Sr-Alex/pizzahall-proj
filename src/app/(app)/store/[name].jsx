import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../../../globalStyles";

import MenuContainer from "../../../components/Menu/MenuContainer";
import { useLocalSearchParams } from "expo-router";

const placeholder = [
	{
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
		pizzaria_id: "43cff103-1d6b-49d8-bc0e-0c8f7cf2a60a",
		name: "Pizza Frango com catupiri",
		preço: 30.0,
		tamanhos: ["P", "M"],
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "7782020e-a171-41d0-8cfc-ff4f805f49f3",
		pizzaria_id: "16ec1860-07ef-4411-8cab-5015a626b3fd",
		name: "Pizza Portuguesa",
		preço: 35.0,
		tamanhos: ["P", "M", "G", "F"],
		descrição: "",

		logo: "https://picsum.photos/500",
	},
	{
		id: "5298b56c-3de2-4ddb-a184-4633bde41f69",
		pizzaria_id: "7d926d0c-4fba-4d09-848b-42012925f1a3",
		name: "Pizza Brasileira",
		preço: 30.2,
		tamanhos: ["M"],
		descrição: "Mistura nacional!",

		logo: "https://picsum.photos/500",
	},
];

export default function StoreContainer() {
	const { name } = useLocalSearchParams();

	console.log(name)

	return (
		<SafeAreaView style={styles.contentContainer}>
			<MenuContainer store={placeholder} />
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
