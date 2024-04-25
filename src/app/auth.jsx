import { Image, ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";

import globalStyles from "../globalStyles";

import RegisterForm from "../components/AuthForms/RegisterForm";
import LoginForm from "../components/AuthForms/LoginForm";

import PizzaLogo from "../assets/img/pizza.jpg";

export default function Auth() {
	const [isLoginLayout, setIsLoginLayout] = useState(true);

	const toggleLayout = () => {
		setIsLoginLayout(!isLoginLayout);
	};
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
			</ScrollView>
			<View style={styles.crossSquare} />
			<View style={styles.crossBand} />
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
		zIndex: -10,

		width: "80%",
		height: "40%",
	},

	crossSquare: {
		position: "absolute",
		top: "25%",
		zIndex: -1,

		transform: [{ rotateZ: "75deg" }],

		width: "150%",
		height: "100%",

		backgroundColor: globalStyles.colors.offWhite,
	},

	crossBand: {
		position: "absolute",
		top: "30%",
		zIndex: -1,

		transform: [{ rotateZ: "-15deg" }],

		width: "150%",
		height: 48,

		backgroundColor: globalStyles.colors.orange,
	},
});
