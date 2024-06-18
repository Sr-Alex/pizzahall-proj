import { StyleSheet } from "react-native";

import globalStyles from "./../../globalStyles";

export default storeStyles = StyleSheet.create({
	StoreList: {
		flex: 2,
		width: "100%",
		paddingVertical: 32,
		paddingHorizontal: 12,

		backgroundColor: globalStyles.colors.offWhite,
		borderTopRightRadius: 16,
		borderTopLeftRadius: 16,
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
		height: 80,
		paddingVertical: 8,
		paddingHorizontal: 12,

		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 8,
	},

	StoreMiniatureLogo: {
		...globalStyles.components.roundedImgContainer,
		height: "100%",
	},

	miniatureTitle: {
		marginBottom: 4,

		...globalStyles.fontSizes.large,
		textAlign: "right",

		color: globalStyles.colors.darkPurple,
	},

	miniatureText: {
		fontSize: 12,
		textAlign: "right",
	},
});