import { Pressable, Text, TextInput, View } from "react-native";
import { useEffect, useState } from "react";

import authFormStyles from "./authFormStyles";

import SubmitButton from "../Inputs/SubmitButton";

import { validateLogin } from "./../../services/validadores";
import { loginUser } from "./../../services/api";

export default function LoginForm({ toogleLayout }) {
	const [loginData, setLoginData] = useState({ email: "", password: "" });
	const [canSubmit, setCanSubmit] = useState(false);

	const changeData = (input, value) => {
		setLoginData({ ...loginData, [input]: value });
	};

	const doLogin = async () => {
		if (!canSubmit) return;

		await loginUser(loginData);
	};

	useEffect(() => {
		const func = async () => {
			setCanSubmit(validateLogin(true));
		};
		func();
	}, [loginData]);

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
					<Text style={authFormStyles.inputLabel}>Email</Text>
					<TextInput
						keyboardType="email-address"
						textContentType="emailAddress"
						autoComplete="email"
						returnKeyType="next"
						placeholder="exemplo@gmail.com"
						multiline={false}
						onChangeText={(value) => changeData("email", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<View>
					<Text style={authFormStyles.inputLabel}>password</Text>
					<TextInput
						textContentType="password"
						autoComplete="password"
						returnKeyType="done"
						placeholder="**********"
						secureTextEntry={true}
						multiline={false}
						onChangeText={(value) => changeData("password", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<SubmitButton onPress={doLogin}>
					<Text style={authFormStyles.formButtonText}>
						Conectar-se
					</Text>
				</SubmitButton>
			</View>
			<View style={authFormStyles.anchorsContainer}>
				<Pressable>
					<Text style={authFormStyles.anchors}>Esqueci a senha</Text>
				</Pressable>
				<Pressable onPress={toogleLayout}>
					<Text style={authFormStyles.anchors}>Criar uma conta</Text>
				</Pressable>
			</View>
		</View>
	);
}
