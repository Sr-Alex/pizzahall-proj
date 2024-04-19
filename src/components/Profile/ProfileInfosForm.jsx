import { Pressable, Text, TextInput, View } from "react-native";
import { useState } from "react";

import profileStyles from "./profileStyles";

import CloseIcon from "../../assets/icons/closeIcon.svg";
import globalStyles from "../../globalStyles";

export default function ProfileInfosForm({ userProfile = {} }) {
	const [isModifying, setIsModifying] = useState(false);
	const [personalInfos, setPersonalInfos] = useState(userProfile || {});

	const toggleModify = () => {
		setIsModifying(!isModifying);
	};

	const changeData = (input, value) => {
		setPersonalInfos({
			...personalInfos,
			[input]: value,
		});
		console.log(personalInfos);
	};

	return (
		<View>
			<View style={profileStyles.profileFormContainer}>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.components.formLabel,
							{ color: globalStyles.colors.black },
						]}>
						telefone:
					</Text>
					<TextInput
						keyboardType="phone-pad"
						textContentType="telephoneNumber"
						returnKeyType="next"
						placeholder={"Seu telefone aqui"}
						editable={isModifying}
						value={personalInfos["Telefone"]}
						onChangeText={(value) => changeData("Telefone", value)}
						style={profileStyles.infosInput}
					/>
				</View>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.components.formLabel,
							{ color: globalStyles.colors.black },
						]}>
						CPF:
					</Text>
					<TextInput
						keyboardType="number-pad"
						returnKeyType="next"
						placeholder={"Seu CPF aqui"}
						editable={isModifying}
						value={personalInfos["CPF"]}
						onChangeText={(value) => changeData("CPF", value)}
						style={profileStyles.infosInput}
					/>
				</View>
				<View style={profileStyles.infosInputContainer}>
					<Text
						style={[
							globalStyles.components.formLabel,
							{ color: globalStyles.colors.black },
						]}>
						Data de nascimento:
					</Text>
					<TextInput
						keyboardType="default"
						returnKeyType="next"
						textContentType="birthdateDay"
						placeholder={"DD/MM/YYY"}
						editable={isModifying}
						value={personalInfos["Data de Nascimento"]}
						onChangeText={(value) =>
							changeData("Data de Nascimento", value)
						}
						style={profileStyles.infosInput}
					/>
				</View>
			</View>
			<View
				style={{ flexDirection: "row", alignSelf: "flex-end", gap: 8 }}>
				<Pressable
					onPress={toggleModify}
					style={profileStyles.editInfosButton}>
					{isModifying ? (
						<CloseIcon width={18} height={18} fill={"red"} />
					) : (
						<Text>Editar</Text>
					)}
				</Pressable>
				{isModifying ? (
					<Pressable style={profileStyles.submitInfosForm}>
						<Text style={profileStyles.submitInfosFormText}>
							Enviar
						</Text>
					</Pressable>
				) : (
					<></>
				)}
			</View>
		</View>
	);
}
