import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default menuStyles = StyleSheet.create({
	MenuContainer: {
		flex: 1,
		alignItems: "center",
		gap: 16,

		width: "90%",
		padding: 16,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	MenuStoreShow: {
		flexDirection: "row",
		alignItems: "center",
		gap: 8,

		width: "100%",
		height: 48,
	},

	MenuStoreShowLogo: {
		...globalStyles.components.roundedImgContainer,

		height: 48,
	},

	BuySelectedMenu: {
		position: "absolute",
		bottom: 8,

		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",

		width: "100%",
		height: 48,
		paddingLeft: 8,

		backgroundColor: "rgba(85, 85, 85, 0.4)",
		borderRadius: 8,
	},

	buyMenuButton: {
		justifyContent: "center",
		alignItems: "center",

		height: 48,
		width: 48,

		backgroundColor: globalStyles.colors.green,
		borderRadius: 8,
	},

	MenuProductList: {
		flex: 1,
		width: "100%",
		maxHeight: "15%",

		marginBottom: 48,
		paddingVertical: 8,

		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 8,
	},

	ShowMenuProduct: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},

	ShowMenuProductDetails: {
		flex: 4,
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		gap: 4,

		paddingLeft: 4,
		paddingRight: 16,
	},

	ShowMenuProductDetailsText: {
		...globalStyles.fontSizes.small,

		width: "60%",
		maxHeight: 40,

		color: globalStyles.colors.black,
	},

	ShowMenuProductButton: {
		flex: 1,
		alignItems: "flex-end",

		maxWidth: 24,

	},
});
