import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

export default navBarStyles = StyleSheet.create({
	MainNavBar: {
		position: "absolute",
		bottom: 0,
		left: 0,

		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center",

		width: "100%",
		height: 64,

		backgroundColor: globalStyles.colors.offWhite,
	},

	iconContianer: {
		width: 32,
		height: 32,
	},
});
