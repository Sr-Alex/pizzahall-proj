import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default mapStyles = StyleSheet.create({
	MapPreview: {
		flex: 1,
		width: "100%",
		marginTop: 8,

		overflow: "hidden",

		backgroundColor: globalStyles.colors.darkPurple,
		borderRadius: 0,
	},
});
