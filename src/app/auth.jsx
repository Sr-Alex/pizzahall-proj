import { Button, Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import globalStyles from "../globalStyles";

import RegisterForm from "../components/AuthForms/RegisterForm";
import LoginForm from "../components/AuthForms/LoginForm";

import PizzaLogo from "../assets/img/pizza.jpg";
import { GoogleSignin } from "@react-native-google-signin/google-signin";

const androidClientId = process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID;

export default function Auth() {
	const [isLoginLayout, setIsLoginLayout] = useState(true);
	const config = {
		androidClientId: androidClientId,
	};

	const toggleLayout = () => {
		setIsLoginLayout(!isLoginLayout);
	};
	console.log(GoogleSignin);

	const googleLogin = async () => {};

	return (
		<SafeAreaView style={styles.AuthPage}>
			<View style={styles.imgContainer}>
				<Image source={PizzaLogo} style={globalStyles.components.img} />
			</View>
			<ScrollView automaticallyAdjustKeyboardInsets>
				{isLoginLayout ? (
					<LoginForm toggleLayout={toggleLayout} />
				) : (
					<RegisterForm toggleLayout={toggleLayout} />
				)}
				<Button title="Sign in with Google" onclick={promptAsync} />
			</ScrollView>
			<View style={styles.crossSquare} />
			<View style={styles.crossBand} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	AuthPage: {
		flex: 1,
		alignItems: "center",

		width: "100%",
		marginBottom: 8,

		backgroundColor: globalStyles.colors.snowWhite,
	},

	imgContainer: {
		zIndex: -10,

		width: "80%",
		height: "40%",
	},

	crossSquare: {
		position: "absolute",
		top: "35%",
		zIndex: -1,

		transform: [{ rotateZ: "-15deg" }],

		width: "200%",
		height: "150%",

		backgroundColor: globalStyles.colors.offWhite,
	},

	crossBand: {
		position: "absolute",
		top: "25%",
		zIndex: -1,

		transform: [{ rotateZ: "-15deg" }],

		width: "200%",
		height: "5%",

		backgroundColor: globalStyles.colors.orange,
	},
});
