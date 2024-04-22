import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../globalStyles";

import MenuContainer from "../components/Menu/MenuContainer";

export default function MenuLayout() {
	return (
		<SafeAreaView style={styles.contentContainer}>
			<MenuContainer />
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
