import { StyleSheet, View } from "react-native";
import globalStyles from "../../globalStyles";
import MenuContainer from "../../components/Menu/MenuContainer";

export default function MenuLayout() {
	return (
		<View style={styles.contentContainer}>
			<MenuContainer />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		alignItems: "center",
		paddingVertical: 16,

		width: "100%",
		height: "100%",

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
