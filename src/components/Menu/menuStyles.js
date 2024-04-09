import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default menuStyles = StyleSheet.create({
	MenuContainer: {
		alignItems: "center",
		gap: 16,

		width: "90%",
		height: "100%",
		padding: 16,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	menuStoreShow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 16,

		width: "100%",
		height: 80,
	},
});
