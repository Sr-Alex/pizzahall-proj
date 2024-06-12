import { useContext } from "react";
import { Text, View } from "react-native";

import { ProfileContext } from "../../contexts/ProfileContext";
import { UserAuthContext } from "../../contexts/UserAuthContext";

import globalStyles from "../../globalStyles";
import profileStyles from "./profileStyles";

import ProfileIcon from "../../assets/icons/profileIcon.svg";

export default function ProfileShow() {
	const { userSignedIn } = useContext(UserAuthContext);
	const { profile } = useContext(ProfileContext);

	return (
		<View style={profileStyles.ProfileShow}>
			<View style={profileStyles.profileImageContainer}>
				<ProfileIcon
					width={64}
					height={64}
					fill={globalStyles.colors.black}
				/>
			</View>
			<View style={profileStyles.showUserName}>
				<Text style={profileStyles.showUserNameText}>
					{userSignedIn ? profile["nome"] : "Convidado"}
				</Text>
			</View>
		</View>
	);
}
