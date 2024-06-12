import { Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { useContext, useEffect } from "react";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import { ProfileContext } from "../../contexts/ProfileContext";
import { userSignOut } from "./../../services/api/userAPI";

import profileStyles from "./profileStyles";

import DropDown from "../DropDown";
import ProfileInfosForm from "./ProfileInfosForm";

export default function ProfileInfos() {
	const { userSignedIn, setUserSignedIn } = useContext(UserAuthContext);
	const { getProfileInfos } = useContext(ProfileContext);

	const handleSignOutButton = () => {
		userSignOut();
		setUserSignedIn(false);

		router.navigate("(main)");
	};

	useEffect(() => {
		getProfileInfos();
	}, [userSignedIn]);

	return (
		<View style={profileStyles.ProfileInfos}>
			<DropDown title={"Informações Pessoais"}>
				<ProfileInfosForm />
			</DropDown>
			<Pressable
				onPress={handleSignOutButton}
				style={profileStyles.signOutButton}>
				<Text style={profileStyles.signOutButtonText}>
					Sair da conta
				</Text>
			</Pressable>
		</View>
	);
}
