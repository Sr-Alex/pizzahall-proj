import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import globalStyles from "../globalStyles";

import LoginForm from "../components/AuthForms/LoginForm";
import RegisterForm from "../components/AuthForms/RegisterForm";

export default function AuthPage() {
	const [isLoginLayout, setisLoginLayout] = useState(true);

	const toogleLayout = () => {
		setisLoginLayout(!isLoginLayout);
	};

	return (
		<SafeAreaView style={styles.AuthPage}>
			<View style={styles.imgContainer}>
				<Image
					source={require("../assets/img/pizza.jpg")}
					style={globalStyles.components.img}
				/>
			</View>
			<View style={styles.formsContainer}>
				{isLoginLayout ? (
					<LoginForm toogleLayout={toogleLayout} />
				) : (
					<RegisterForm toogleLayout={toogleLayout} />
				)}
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

});
