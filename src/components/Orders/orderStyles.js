import { StyleSheet } from "react-native";
import globalStyles from "./../../globalStyles";

export default orderStyles = StyleSheet.create({
	titleContainer: {
		flex: 1,

		justifyContent: "center",
		alignItems: "center",

		width: "100%",
		maxHeight: 160,
	},

	title: {
		...globalStyles.fontSizes.extraLarge,
		color: globalStyles.colors.black,
	},

	scrollTitlesContainer: {
		flexDirection: "row",

		width: "100%",
		height: 48,
	},

	scrollTitleBox: {
		justifyContent: "center",
		alignItems: "center",

		width: "50%",
		height: "100%",

		borderBottomWidth: 4,
	},

	scrollTitle: {
		...globalStyles.fontSizes.medium,
		color: globalStyles.colors.black,
	},
	OrdersList: {
		flex: 1,

		width: "100%",

		paddingVertical: 16,
		paddingHorizontal: 8,
	},

	OrderMiniature: {
		width: "100%",
		height: 196,
		paddingHorizontal: 16,
		paddingVertical: 8,

		borderWidth: 4,
		borderRadius: 32,
		borderColor: globalStyles.colors.gray,
	},

	orderTitle: {
		...globalStyles.fontSizes.large,
		letterSpacing: 2,
		color: globalStyles.colors.black,
	},

	orderInfoBox: {
		paddingRight: 32,
		paddingVertical: 4,

		borderBottomWidth: 4,
		borderBottomColor: globalStyles.colors.lightGray,
	},

	orderInfo: {
		...globalStyles.fontSizes.small,
		color: globalStyles.colors.gray,
	},

	orderMainInfos: {
		...globalStyles.fontSizes.medium,
		color: globalStyles.colors.black,
	},

	orderButtonsContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
	},

	orderButton: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		height: "100%",
	},

	orderButtonText: {
		...globalStyles.fontSizes.large,

		color: globalStyles.colors.orange,
	},

	paymentContainer: {
		alignItems: "center",
		gap: 8,

		width: "80%",
		height: "50%",

		paddingTop: 16,
		paddingBottom: 8,
		paddingHorizontal: 8,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	qrCodeContainer: {
		justifyContent: "center",
		alignItems: "center",

		width: "90%",
		aspectRatio: 1 / 1,

		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 8,
	},

	paymentCodeContainer: {
		flex: 1,

		width: "100%",

		paddingHorizontal: 16,
		//backgroundColor: "black",
	},
});
