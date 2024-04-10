import { Pressable, Text, TextInput, View } from "react-native";
import authFormStyles from "./authFormStyles";
import SubmitButton from "../Inputs/SubmitButton";
import { useEffect, useState } from "react";
import { validateRegister } from "../../services/validadores";
import { registerUser } from "../../services/api";

export default function RegisterForm({ toogleLayout }) {
	const [registerData, setRegisterData] = useState({
		nome: "",
		email: "",
		password: "",
	});
	const [canSubmit, setCanSubmit] = useState(true);

	const changeData = (input, value) => {
		setRegisterData({ ...registerData, [input]: value });
	};

	const doRegister = async () => {
		if (!canSubmit) return;

		console.log("tentando registrar..");

		await registerUser(registerData);
	};

	useEffect(() => {
		const func = async () => {
			setCanSubmit(validateRegister(registerData));
		};
		func();
	}, [registerData]);

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
						placeholder="exemplo@gmail.com"
						onChangeText={(value) => changeData("email", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<View>
					<Text style={authFormStyles.inputLabel}>Senha</Text>
					<TextInput
						textContentType="password"
						autoComplete="password"
						returnKeyType="done"
						secureTextEntry={true}
						multiline={false}
						placeholder="**********"
						onChangeText={(value) => changeData("password", value)}
						style={authFormStyles.formInput}
					/>
				</View>
				<SubmitButton
					disabled={!canSubmit}
					onPress={doRegister}
					style={authFormStyles.formButton}>
					<Text style={authFormStyles.formButtonText}>
						Cadastrar-se
					</Text>
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
