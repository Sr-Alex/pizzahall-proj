import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../globalStyles";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Protótipo Pizzahall</Text>
			<Link navigate href={"/AuthPage"} style={styles.anchors}>
				Ir para tela de login
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",

		height: "100%",
	},

	title: {
		width: 256,
		marginBottom: 64,

		fontSize: 32,
		fontWeight: "bold",
		textAlign: "center",
		color: globalStyles.colors.darkPurple,
	},

	anchors: {
		textDecorationLine: "underline",
		fontSize: 20,
		color: globalStyles.colors.black
	}
});
