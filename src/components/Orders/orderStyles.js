import { StyleSheet } from "react-native";
import globalStyles from "./../../globalStyles";

export default orderStyles = StyleSheet.create({
	titleContainer: {
		flex: 1,

		justifyContent: "center",
		alignItems: "center",

		width: "100%",
		maxHeight: 160,
	},

	title: {
		...globalStyles.fontSizes.extraLarge,
		color: globalStyles.colors.black,
	},

	scrollTitlesContainer: {
		flexDirection: "row",

		width: "100%",
		height: 48,

	},

	scrollTitleBox: {
		justifyContent: "center",
		alignItems: "center",

		width: "50%",
		height: "100%",

		borderBottomWidth: 4,
	},

	scrollTitle: {
		...globalStyles.fontSizes.medium,
		color: globalStyles.colors.black,
	},
	OrdersList: {
		flex: 1,
		width: "100%",
		paddingVertical: 16,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,
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

	orderTitle: {
		...globalStyles.fontSizes.medium,
		letterSpacing: 2,
		color: globalStyles.colors.black,
	},

	orderInfo: {
		...globalStyles.fontSizes.small,
		color: globalStyles.colors.gray,
	},

	miniatureInfos: {
		width: 128,
		height: "100%",
	},
});
