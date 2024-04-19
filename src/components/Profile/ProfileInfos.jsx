import { Pressable, Text, TextInput, View } from "react-native";
import { router } from "expo-router";
import { useContext } from "react";

import profileStyles from "./profileStyles";

import { userSignOut } from "./../../services/api/authApi";
import UserAuthContext from "../../contexts/UserAuthContext";

import DropDown from "../DropDown";
import ProfileInfosForm from "./ProfileInfosForm";

export default function ProfileInfos({ userProfile }) {
	const { setUserSignedIn } = useContext(UserAuthContext);

	const handleSignOutButton = () => {
		userSignOut();
		setUserSignedIn(false);

		router.navigate("(app)");
	};

	return (
		<View style={profileStyles.ProfileInfos}>
			<DropDown title={"Informações Pessoais"}>
				<ProfileInfosForm
					userProfile={{
						"User": "cleiton@gmail.com",
						"Nome": "Cleiton",
						"Data de Nascimento": "2004-11-13",
						"CPF": "20034538909",
						"Telefone": "98646542",
					}}
				/>
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
