import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default profileStyles = StyleSheet.create({
	ProfileShow: {
		alignItems: "center",
		gap: 16,

		width: "100%",
		height: "auto",
	},

	profileImageContainer: {
		alignItems: "center",
		justifyContent: "center",

		width: 144,
		height: 144,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	showUserName: {
		minWidth: 128,
		maxWidth: 256,
		height: "auto",
		paddingHorizontal: 16,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 64,
	},

	showUserNameText: {
		fontSize: 20,
		fontWeight: "400",
		textAlign: "center",
		textAlignVertical: "center",

		color: globalStyles.colors.black,
	},

	ProfileInfos: {
		flex: 1,

		gap: 16,

		width: "80%",
		height: 412,
		paddingVertical: 16,
		paddingHorizontal: 32,

		backgroundColor: globalStyles.colors.offWhite,
		borderRadius: 16,
	},

	fieldContainer: {
		width: "100%",
		height: 64,
	},

	fieldLabel: {
		marginBottom: 8,

		fontSize: 18,
		fontWeight: "600",

		color: globalStyles.colors.gray,
	},

	signOutButton: {
		justifyContent: "center",
		width: 112,
		height: 32,

		borderWidth: 2,
		borderColor: "red",

		borderRadius: 64,
	},

	signOutButtonText: {
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",

		color: globalStyles.colors.black,
	},
});
