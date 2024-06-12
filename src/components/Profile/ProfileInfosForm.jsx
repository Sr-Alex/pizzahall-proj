import {
	ActivityIndicator,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";
import { router } from "expo-router";
import { useContext, useState } from "react";

import { ProfileContext } from "../../contexts/ProfileContext";

import profileStyles from "./profileStyles";

import CloseIcon from "../../assets/icons/closeIcon.svg";
import globalStyles from "../../globalStyles";

export default function ProfileInfosForm() {
	const { profile, modifyUser } = useContext(ProfileContext);
	const [isModifying, setIsModifying] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [personalInfos, setPersonalInfos] = useState({});

	const toggleModify = () => {
		setIsModifying(!isModifying);
	};

	const changeData = (input, value) => {
		setPersonalInfos({
			...personalInfos,
			[input]: value,
		});
	};

	const doInfosPatch = async () => {
		setIsLoading(true);

		modifyUser(personalInfos);

		setIsLoading(false);

		router.navigate("(main)");
	};

	return (
		<View>
			<View style={profileStyles.profileFormContainer}>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.fontSizes.spacedLabel,
							{ flex: 1, color: globalStyles.colors.black },
						]}>
						telefone:
					</Text>
					<TextInput
						keyboardType="phone-pad"
						textContentType="telephoneNumber"
						returnKeyType="next"
						placeholder={profile["telefone"] || "Seu telefone aqui"}
						editable={isModifying}
						value={personalInfos["telefone"]}
						onChangeText={(value) => changeData("telefone", value)}
						style={profileStyles.infosInput}
					/>
				</View>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.fontSizes.spacedLabel,
							{ flex: 1, color: globalStyles.colors.black },
						]}>
						CPF:
					</Text>
					<TextInput
						keyboardType="number-pad"
						returnKeyType="next"
						placeholder={profile["cpf"] || "Seu CPF aqui"}
						editable={isModifying}
						value={personalInfos["cpf"]}
						onChangeText={(value) => changeData("cpf", value)}
						style={profileStyles.infosInput}
					/>
				</View>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.fontSizes.spacedLabel,
							{ flex: 1, color: globalStyles.colors.black },
						]}>
						Data de nascimento:
					</Text>
					<TextInput
						keyboardType="default"
						returnKeyType="next"
						textContentType="birthdateDay"
						placeholder={
							profile["Data de Nascimento"] || "YYYY-MM-DD"
						}
						editable={isModifying}
						value={personalInfos["dataNasc"]}
						onChangeText={(value) => changeData("dataNasc", value)}
						style={profileStyles.infosInput}
					/>
				</View>
			</View>
			<View
				style={{ flexDirection: "row", alignSelf: "flex-end", gap: 8 }}>
				<Pressable
					disabled={isLoading}
					onPress={toggleModify}
					style={profileStyles.editInfosButton}>
					{isModifying ? (
						<CloseIcon width={18} height={18} fill={"red"} />
					) : (
						<Text>Editar</Text>
					)}
				</Pressable>
				{isModifying ? (
					<Pressable
						disabled={isLoading}
						onPress={doInfosPatch}
						style={[
							profileStyles.submitInfosForm,
							isLoading
								? { backgroundColor: globalStyles.colors.gray }
								: {},
						]}>
						{isLoading ? (
							<ActivityIndicator
								size={"small"}
								color={globalStyles.colors.offWhite}
							/>
						) : (
							<Text style={profileStyles.submitInfosFormText}>
								Enviar
							</Text>
						)}
					</Pressable>
				) : (
					<></>
				)}
			</View>
		</View>
	);
}
