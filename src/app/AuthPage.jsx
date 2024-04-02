import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import globalStyles from "../globalStyles";
import { useState } from "react";
import LoginForm from "../components/AuthForms/LoginForm";

export default function AuthPage() {
     const [isLogin, setIsLogin] = useState(true);

	return (
		<SafeAreaView style={styles.AuthPage}>
				<View style={styles.imgContainer}>
                         <Image source={require("../assets/img/pizza.jpg")} style={styles.img} />
                    </View>
                    <View style={styles.formsContainer}>
                         {isLogin ? <LoginForm /> : <RegisterForm/>}
                    </View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	AuthPage: {
		alignItems: "center",

		width: "100%",
		height: "100%",

		backgroundColor: globalStyles.colors.snowWhite,
	},

	imgContainer: {
		width: "80%",
		height: 400,
	},

	img: {
          width: "100%",
          height: "100%"
     },
});
