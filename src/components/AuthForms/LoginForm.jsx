import {
	ActivityIndicator,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";
import { useContext, useState } from "react";
import { router } from "expo-router";
import { Toast } from "toastify-react-native";

import { UserAuthContext } from "../../contexts/UserAuthContext";
import { validateLogin } from "./../../services/validadores";

import globalStyles from "../../globalStyles";
import authFormStyles from "./authFormStyles";


import SubmitButton from "../Inputs/SubmitButton";
import PasswordInput from "./PasswordInput";

export default function LoginForm({ toggleLayout = () => {} }) {
	const { makeLogin } = useContext(UserAuthContext);
	const [loginData, setLoginData] = useState({ email: "", password: "" });

	const [isLoading, setIsLoading] = useState(false);

	const changeData = (input, value) => {
		setLoginData({ ...loginData, [input]: value });
	};

	const handleLogin = async () => {
		if (!validateLogin(loginData)) {
			Toast.warn("Campos inválidos!");
			return;
		}

		setIsLoading(true);

		const login = await makeLogin(loginData);
		if (!login) {
			Toast.error("Falha ao tentar efetuar login.");
		}
		//Toast.success("Bem-vindo(a)!");

		setIsLoading(false);

		router.back();
	};

	return (
		<View style={authFormStyles.formContainer}>
			<View style={authFormStyles.titleContainer}>
				<Text style={authFormStyles.formTitle}>Bem-vindo(a)!</Text>
				<Text style={authFormStyles.formSubtitle}>
					Faça login para continuar.
				</Text>
			</View>
			<View style={authFormStyles.form}>
				<View>
					<Text style={authFormStyles.formInputLabel}>Email</Text>
					<TextInput
						keyboardType="email-address"
						textContentType="emailAddress"
						autoComplete="email"
						returnKeyType="next"
						placeholder="exemplo@gmail.com"
						multiline={false}
						autoCapitalize="none"
						onChangeText={(value) => changeData("email", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<View>
					<Text style={authFormStyles.formInputLabel}>Senha</Text>
					<PasswordInput field="password" changeData={changeData} />
				</View>
				<SubmitButton disabled={isLoading} onPress={handleLogin}>
					{isLoading ? (
						<ActivityIndicator
							size={"large"}
							color={globalStyles.colors.offWhite}
						/>
					) : (
						<Text style={authFormStyles.formButtonText}>
							Conectar-se
						</Text>
					)}
				</SubmitButton>
			</View>
			<View style={authFormStyles.anchorsContainer}>
				<Pressable>
					<Text style={authFormStyles.anchors}>Esqueci a senha</Text>
				</Pressable>
				<Pressable onPress={toggleLayout}>
					<Text style={authFormStyles.anchors}>Criar uma conta</Text>
				</Pressable>
			</View>
		</View>
	);
}
