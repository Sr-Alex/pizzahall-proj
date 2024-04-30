import { StyleSheet } from "react-native";

import globalStyles from "../../globalStyles";

export default productStyles = StyleSheet.create({
	productSelector: {
		flex: 2,
		justifyContent: "space-between",
		alignItems: "center",
		gap: 8,

		width: "100%",
	},

	ProductSlider: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",

		width: "100%",
		height: "30%",
	},

	ProductView: {
		...globalStyles.components.roundedImgContainer,
		height: "100%",
	},

	ProductPager: {
		height: "100%",
		aspectRatio: 1,
	},

	productTitle: {
		width: 192,
		height: "auto",
		maxHeight: 64,

		marginTop: 4,
		marginBottom: 8,

		...globalStyles.fontSizes.medium,
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	productCurrency: {
		...globalStyles.fontSizes.medium,
		textAlign: "center",

		color: globalStyles.colors.gray,
	},

	productPrice: {
		...globalStyles.fontSizes.spaced,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	SizeSelector: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
		gap: 4,

		width: 224,
		maxHeight: 112,
		marginTop: 8,
	},

	SizeSelectorLabel: {
		...globalStyles.fontSizes.large,
		textAlign: "center",

		color: globalStyles.colors.gray,
	},

	sizeMark: {
		alignItems: "center",
		justifyContent: "center",

		width: 24,
		aspectRatio: 1,

		backgroundColor: globalStyles.colors.gray,
		borderRadius: 4,
	},

	sizeMarkText: {
		...globalStyles.fontSizes.medium,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.offWhite,
	},

	sizeMarkButton: {
		alignItems: "center",
		justifyContent: "center",

		height: 48,
		aspectRatio: 1,

		backgroundColor: globalStyles.colors.gray,
		borderRadius: 8,
	},

	sizeMarkButtonText: {
		...globalStyles.fontSizes.extraLarge,
		fontWeight: "bold",

		color: globalStyles.colors.offWhite,
	},

	SelectProduct: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		width: 192,
		height: 32,
	},

	SelectProductText: {
		...globalStyles.fontSizes.spaced,

		color: globalStyles.colors.gray,
	},
});
