import { useContext } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ProfileContextProvider } from "../../contexts/ProfileContext";
import { UserAuthContext } from "../../contexts/UserAuthContext";

import globalStyles from "../../globalStyles";

import ProfileShow from "../../components/Profile/ProfileShow";
import ProfileInfos from "../../components/Profile/ProfileInfos";

import AuthSpan from "../../components/AuthForms/AuthSpan";

export default function ProfileLayout() {
	const { userSignedIn } = useContext(UserAuthContext);
	return (
		<SafeAreaView style={styles.contentContainer}>
			<ProfileContextProvider>
				<ProfileShow />
				{userSignedIn ? <ProfileInfos /> : <AuthSpan />}
			</ProfileContextProvider>
		</SafeAreaView>
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
	},
});
