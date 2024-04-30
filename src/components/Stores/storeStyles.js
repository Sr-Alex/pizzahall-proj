import { StyleSheet } from "react-native";

import globalStyles from "./../../globalStyles";

export default storeStyles = StyleSheet.create({
	StoreList: {
		flex: 2,
		width: "80%",
		paddingVertical: 16,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	storeName: {
		...globalStyles.fontSizes.medium,

		color: globalStyles.colors.gray,
	},

	StoreMiniature: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",

		width: "100%",
		height: 64,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,
	},

	StoreMiniatureLogo: {
		...globalStyles.components.roundedImgContainer,
		height: "100%",
	},

	miniatureTitle: {
		marginBottom: 4,

		...globalStyles.fontSizes.medium,
		textAlign: "right",

		color: globalStyles.colors.darkPurple,
	},

	miniatureText: {
		fontSize: 12,
		textAlign: "right",
	},
});
