import { Text, View } from "react-native";
import profileStyles from "./profileStyles";

import ProfileIcon from "../../assets/icons/profileIcon.svg";
import globalStyles from "../../globalStyles";

export default function ProfileShow({ userProfile = {} }) {
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
					{userProfile.nome ? userProfile.nome : "Convidado"}
				</Text>
			</View>
		</View>
	);
}
