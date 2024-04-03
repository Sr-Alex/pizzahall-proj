import { StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default mapStyles = StyleSheet.create({
	MapPreview: {
		width: "80%",
		height: 256,
          marginTop: 8,

          overflow: "hidden",

		backgroundColor: globalStyles.colors.darkPurple,
          borderRadius: 16,
	},
});
