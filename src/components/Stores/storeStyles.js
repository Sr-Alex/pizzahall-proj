import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

export default storeStyles = StyleSheet.create({
	StoreList: {
		width: "80%",
		height: 384,
		gap: 8,

		overflow: "scroll",

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	StoreMiniature: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		width: "100%",
		height: 80,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,

		borderBottomWidth: 1,
		borderColor: globalStyles.colors.black,
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
