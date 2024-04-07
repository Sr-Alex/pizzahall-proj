import { StyleSheet, View } from "react-native";

import globalStyles from "../../globalStyles";

import ProfileShow from "../../components/Profile/ProfileShow";
import ProfileInfos from "../../components/Profile/ProfileInfos";

export default function ProfileLayout() {
	return (
		<View style={styles.contentContainer}>
               <ProfileShow />
               <ProfileInfos />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
          alignItems: "center",
		gap: 32,

		width: "100%",
		height: "90%",
		paddingTop: 32,
		paddingBottom: 16,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
