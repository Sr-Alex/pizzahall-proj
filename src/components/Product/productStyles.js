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
		height: 96,

		marginTop: 4,
		marginBottom: 8,

		fontSize: 20,
		fontWeight: "600",
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	productCurrency: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.gray,
	},

	productPrice: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		letterSpacing: 4,

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
