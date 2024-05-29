import { Text, View } from "react-native";
import profileStyles from "./profileStyles";

import ProfileIcon from "../../assets/icons/profileIcon.svg";
import globalStyles from "../../globalStyles";

export default function ProfileShow({ isSigned = false, userProfile = {} }) {
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
					{isSigned ? userProfile["nome"] : "Convidado"}
				</Text>
			</View>
		</View>
	);
}
