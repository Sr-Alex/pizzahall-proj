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

	ShowNameText: {
		fontSize: 24,
		fontWeight: "400",

		color: globalStyles.colors.gray,
	},

	ProfileInfos: {
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
});
