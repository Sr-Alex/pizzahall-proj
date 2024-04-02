import { StyleSheet } from "react-native";
import globalStyles from "../globalStyles";

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
		textAlign: "center",

		fontSize: 24,
		fontWeight: "bold",
		color: globalStyles.colors.darkPurple,
	},

	formSubtitle: {
		textAlign: "center",

		fontSize: 16,
		fontWeight: "600",
		color: globalStyles.colors.black,
	},

	form: {
		alignItems: "center",

		width: "100%",
		gap: 8,
	},

	inputLabel: {
		marginBottom: 8,

		fontSize: 16,
		fontWeight: "600",
		letterSpacing: 2,

		color: globalStyles.colors.darkPurple,
	},

	formInput: {
		width: 256,
		height: 48,
		paddingHorizontal: 12,

		color: globalStyles.colors.black,
		backgroundColor: globalStyles.colors.lightGray,
		borderRadius: 16,
	},

	formButton: {
		justifyContent: "center",

		width: 224,
		height: 48,
		marginTop: 20,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 8,
	},

	formButtonText: {
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",

		color: globalStyles.colors.snowWhite,
	},
});
