import { Pressable, Text, TextInput, View } from "react-native";
import authFormStyles from "../authFormStyles";

export default function LoginForm({toogleLayout}) {
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
                              Conectar-se
                         </Text>
                    </Pressable>
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
