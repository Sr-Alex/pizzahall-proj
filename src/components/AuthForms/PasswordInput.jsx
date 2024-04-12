import { Pressable, TextInput, View } from "react-native";
import { useState } from "react";

import authFormStyles from "./authFormStyles";

import EyeOpenIcon from "../../assets/icons/eyeOpenIcon.svg";
import EyeSlashIcon from "../../assets/icons/eyeSlashIcon.svg";

export default function PasswordInput({ field = "", changeData = () => {} }) {
	const [showOn, setShowOn] = useState(false);

	return (
		<View style={authFormStyles.PasswordInputContainer}>
			<TextInput
				textContentType="password"
				autoComplete="password"
				returnKeyType="next"
				placeholder="**********"
				secureTextEntry={showOn ? false : true}
				multiline={false}
				autoCorrect={false}
				onChangeText={(value) => changeData(field, value)}
				style={authFormStyles.PasswordInput}
			/>
			<Pressable
				style={authFormStyles.showOnButton}
				onPress={() => setShowOn(!showOn)}>
				{showOn ? (
					<EyeOpenIcon width={28} height={24} />
				) : (
					<EyeSlashIcon width={28} height={24} />
				)}
			</Pressable>
		</View>
	);
}
