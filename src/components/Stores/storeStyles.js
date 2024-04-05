import { StyleSheet } from "react-native";

import globalStyles from './../../globalStyles';

export default storeStyles = StyleSheet.create({
	StoreList: {
		width: "80%",
		height: 384,
		paddingVertical: 16,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	StoreMiniature: {
		position: "relative",

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		width: "100%",
		height: 80,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,
	},

	miniatureTitle: {
		marginBottom: 8,

		fontSize: 16,
		fontWeight: "bold",
		textAlign: "right",

		color: globalStyles.colors.darkPurple,
	},

	miniatureText: {
		marginVertical: 2,

		fontSize: 12,
		textAlign: "right",
	},
});
