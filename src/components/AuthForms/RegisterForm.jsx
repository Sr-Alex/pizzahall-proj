import {
	ActivityIndicator,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";
import { useContext, useState } from "react";
import { router } from "expo-router";

import globalStyles from "../../globalStyles";
import authFormStyles from "./authFormStyles";

import UserAuthContext from "../../contexts/UserAuthContext";

import { validateRegister } from "../../services/validadores";
import { registerUser } from "../../services/api/userAPI";

import SubmitButton from "../Inputs/SubmitButton";
import PasswordInput from "./PasswordInput";

export default function RegisterForm({ toogleLayout }) {
	const { setUserSignedIn } = useContext(UserAuthContext);

	const [registerData, setRegisterData] = useState({
		nome: "",
		email: "",
		password: "",
		passwordconfirm: "",
	});
	const [isLoading, setIsLoading] = useState(false);

	const changeData = (input, value) => {
		setRegisterData({ ...registerData, [input]: value });
	};

	const doRegister = async () => {
		if (
			!validateRegister(
				registerData.nome,
				registerData.email,
				registerData.password,
				registerData.passwordconfirm
			)
		)
			return;
		setIsLoading(true);

		await registerUser(registerData);

		setIsLoading(false);

		setUserSignedIn(true);

		router.back();
	};

	return (
		<View style={authFormStyles.formContainer}>
			<View>
				<Text style={authFormStyles.formTitle}>Crie uma conta!</Text>
			</View>
			<View style={authFormStyles.form}>
				<View>
					<Text style={authFormStyles.inputLabel}>Nome</Text>
					<TextInput
						textContentType="name"
						autoComplete="name"
						returnKeyType="next"
						multiline={false}
						placeholder="Nome Completo"
						onChangeText={(value) => changeData("nome", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<View>
					<Text style={authFormStyles.inputLabel}>Email</Text>
					<TextInput
						keyboardType="email-address"
						textContentType="emailAddress"
						autoComplete="email"
						returnKeyType="next"
						multiline={false}
						autoCapitalize="none"
						placeholder="exemplo@gmail.com"
						onChangeText={(value) => changeData("email", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<View>
					<Text style={authFormStyles.inputLabel}>Senha</Text>
					<PasswordInput field="password" changeData={changeData} />
				</View>
				<View>
					<Text style={authFormStyles.inputLabel}>
						Confirmar senha
					</Text>
					<PasswordInput
						field="passwordconfirm"
						changeData={changeData}
					/>
				</View>
				<SubmitButton
					disabled={isLoading}
					onPress={doRegister}
					style={authFormStyles.formButton}>
					{isLoading ? (
						<ActivityIndicator
							size={"large"}
							color={globalStyles.colors.offWhite}
						/>
					) : (
						<Text style={authFormStyles.formButtonText}>
							Cadastrar-se
						</Text>
					)}
				</SubmitButton>
			</View>
			<View style={authFormStyles.anchorsContainer}>
				<Pressable onPress={toogleLayout}>
					<Text style={authFormStyles.anchors}>
						Já tem uma conta? Faça login aqui!
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
