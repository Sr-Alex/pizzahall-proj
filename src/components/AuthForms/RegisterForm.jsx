import { Text, TextInput, View } from "react-native";
import authFormStyles from './../authFormStyles';

export default function RegisterForm() {
	return (
		<View style={authFormStyles.formContainer}>
			<View>
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
			</View>
		</View>
	);
}
