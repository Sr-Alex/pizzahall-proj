import { StyleSheet, View } from "react-native";
import { useContext, useEffect, useState } from "react";

import UserAuthContext from "./../../contexts/UserAuthContext";
import { getUserInfos } from "../../services/api/userAPI";
import secure from "../../services/secure";

import globalStyles from "../../globalStyles";

import ProfileShow from "../../components/Profile/ProfileShow";
import ProfileInfos from "../../components/Profile/ProfileInfos";

import AuthSpan from "../../components/AuthForms/AuthSpan";

export default function ProfileLayout() {
	const { userSignedIn } = useContext(UserAuthContext);
	const [profile, setProfile] = useState({});

	const getProfile = async () => {
		const auth = await secure.getStoredAuth();
		const response = await getUserInfos(auth["id"]);

		if (!response) return;

		setProfile(response);
	};

	useEffect(() => {
		getProfile();
	}, []);

	return (
		<View style={styles.contentContainer}>
			<ProfileShow isSigned={userSignedIn} userProfile={profile} />
			{userSignedIn ? <ProfileInfos userProfile={profile} /> : <AuthSpan />}
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
