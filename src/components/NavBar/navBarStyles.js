import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

export default navBarStyles = StyleSheet.create({
	MainNavBar: {
		alignItems: "center",

		position: "absolute",
		bottom: 0,
		left: 0,

		width: "100%",
		height: 64,

		backgroundColor: globalStyles.colors.offWhite,
	},

	iconsRow: {
		position: "relative",

		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",

		width: "90%",
		height: 32,
	},

	iconContianer: {
		position: "relative",
		bottom: 48,

		width: 32,
		height: 32,
	},

	navBarDescription: {
		width: "100%",

		fontSize: 16,
		fontWeight: "600",
		textAlign: "center",

		color: globalStyles.colors.gray,
	},

	selectedMark: {
		position: "absolute",
		zIndex: -1,
		bottom: 32,
		left: "50%",

		transform: [{ translateX: -32 }],

		width: 64,
		height: 64,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 64,
	},
});
