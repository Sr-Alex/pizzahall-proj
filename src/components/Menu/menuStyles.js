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

	BuySelectedMenu: {
		position: "absolute",
		bottom: 16,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		width: "100%",
		height: 64,
		paddingLeft: 8,
		paddingRight: 4,

		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 8,
	},

	buyMenuButton: {
		justifyContent: "center",
		alignItems: "center",

		width: 48,
		height: 48,

		backgroundColor: globalStyles.colors.green,
		borderRadius: 8,
	},
});
