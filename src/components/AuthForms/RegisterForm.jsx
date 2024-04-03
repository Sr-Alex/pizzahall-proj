import { Pressable, Text, TextInput, View } from "react-native";
import authFormStyles from "./../authFormStyles";

export default function RegisterForm({toogleLayout}) {
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
						style={authFormStyles.formInput}
					/>
				</View>
				<Pressable onPress={() => {}} style={authFormStyles.formButton}>
					<Text style={authFormStyles.formButtonText}>
						Cadastrar-se
					</Text>
				</Pressable>
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
