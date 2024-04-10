import { StyleSheet, Text, View } from "react-native";

import globalStyles from "../globalStyles";
import { Link } from "expo-router";

export default function Page() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Protótipo Pizzahall</Text>
			<Link navigate href={"/auth"} style={styles.anchors}>
				Ir para tela de login
			</Link>
			<Link navigate href={"(tabs)"} style={styles.anchors}>
				Ir para tela Home
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
		marginVertical: 8,

		fontSize: 20,
		textDecorationLine: "underline",
		color: globalStyles.colors.black,
	},
});
