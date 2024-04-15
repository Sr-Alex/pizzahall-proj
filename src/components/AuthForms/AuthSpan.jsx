import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import authFormStyles from "./authFormStyles";

export default function AuthSpan() {
	return (
		<View style={authFormStyles.AuthSpan}>
               <Link href={"auth"} style={authFormStyles.AuthSpanText}>
				Faça login ou crie sua conta!
			</Link>
		</View>
	);
}
