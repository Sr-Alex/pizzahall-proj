import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default authFormStyles = StyleSheet.create({
	formContainer: {
		width: 256,
		height: "auto",
	},

	titleContainer: {
		width: "100%",
		marginTop: 8,
		marginBottom: 16,
	},

	formTitle: {
		marginBottom: 8,

		...globalStyles.fontSizes.spacedTitle,
		textAlign: "center",

		color: globalStyles.colors.darkPurple,
	},

	formSubtitle: {
		marginBottom: 8,

		...globalStyles.fontSizes.medium,
		textAlign: "center",

		color: globalStyles.colors.black,
	},

	form: {
		alignItems: "center",

		width: "100%",
		gap: 16,
	},

	formInput: {
		width: 256,
		height: 48,
		paddingHorizontal: 12,

		color: globalStyles.colors.black,
		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 16,
	},

	formInputLabel: {
		...globalStyles.fontSizes.spacedLabel,

		color: globalStyles.colors.black,
	},

	formButtonText: {
		...globalStyles.fontSizes.large,
		textAlign: "center",

		color: globalStyles.colors.snowWhite,
	},

	anchorsContainer: {
		flexDirection: "row",

		justifyContent: "space-between",

		marginTop: 16,
	},

	anchors: {
		...globalStyles.fontSizes.small,
		textDecorationLine: "underline",

		color: globalStyles.colors.black,
	},

	PasswordInputContainer: {
		flexDirection: "row",
		alignItems: "center",

		width: 256,
		height: 48,

		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 16,
	},

	PasswordInput: {
		width: "80%",
		height: "100%",
		paddingHorizontal: 12,
	},

	showOnButton: {
		justifyContent: "center",
		alignItems: "center",

		width: "20%",
		height: "100%",
	},

	AuthSpan: {
		justifyContent: "center",
		alignItems: "center",

		width: 256,
	},

	AuthSpanText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",

		textDecorationLine: "underline",

		color: globalStyles.colors.black,
	},
});
