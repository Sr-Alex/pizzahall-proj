import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default productStyles = StyleSheet.create({
	productSelector: {
		alignItems: "center",
		gap: 16,

		width: "100%",
		height: "auto",
	},

	ProductPager: {
		width: 192,
		height: 192,
	},

	productView: {
		width: 192,
		height: 192,

		overflow: "hidden",

		borderRadius: 256,
	},

	productTitle: {
		width: 256,

		marginTop: 32,
		marginBottom: 16,

		fontSize: 24,
		textAlign: "center",

		color: globalStyles.colors.gray,
	},

	productCurrency: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	productPrice: {
		fontSize: 20,
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	SizeSelector: {
		flexDirection: "row",
		justifyContent: "space-between",

		width: 256,
		height: 48,
		marginTop: 32,
	},

	sizeMark: {
		alignItems: "center",
		justifyContent: "center",

		width: 64,
		height: 48,

		backgroundColor: globalStyles.colors.gray,
		borderRadius: 16,
	},

	sizeMarkText: {
		fontSize: 24,
		fontWeight: "bold",

		color: globalStyles.colors.offWhite,
	},
});
