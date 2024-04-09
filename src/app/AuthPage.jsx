import { Image, ScrollView, StyleSheet, View } from "react-native";
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
			<ScrollView automaticallyAdjustKeyboardInsets>
				{isLoginLayout ? (
					<LoginForm toogleLayout={toogleLayout} />
				) : (
					<RegisterForm toogleLayout={toogleLayout} />
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
		top: "25%",
		zIndex: -1,

		transform: [{ rotateZ: "-15deg" }],

		width: "150%",
		height: 48,

		backgroundColor: globalStyles.colors.orange,
	},
});
