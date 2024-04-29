import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default orderStyles = StyleSheet.create({
	OrdersList: {
		flex: 1,
		width: "90%",
		paddingVertical: 16,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	OrderMiniature: {
		flexDirection: "row",
		justifyContent: "space-between",

		width: "100%",
		height: 64,
	},

	miniatureShow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,

		width: 144,
		height: "100%",
	},

	orderMark: {
		justifyContent: "center",
		alignItems: "center",

		minWidth: 32,
		width: "auto",
		height: 32,
		paddingHorizontal: 4,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 32,
	},

	orderMarkText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.offWhite,
	},

	miniatureInfos: {
		width: 128,
		height: "100%",
	},
});
