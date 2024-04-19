import { StyleSheet, View } from "react-native";
import { useContext } from "react";

import UserAuthContext from "./../../contexts/UserAuthContext";

import globalStyles from "../../globalStyles";

import ProfileShow from "../../components/Profile/ProfileShow";
import ProfileInfos from "../../components/Profile/ProfileInfos";
import AuthSpan from "../../components/AuthForms/AuthSpan";

export default function ProfileLayout() {
	const { userSignedIn } = useContext(UserAuthContext);

	return (
		<View style={styles.contentContainer}>
			<ProfileShow />
			{userSignedIn ? <ProfileInfos /> : <AuthSpan />}
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		gap: 32,

		width: "100%",
		height: "90%",
		paddingTop: 16,
		paddingBottom: 32,

		backgroundColor: globalStyles.colors.orange,
		borderRadius: 24,
	},
});
