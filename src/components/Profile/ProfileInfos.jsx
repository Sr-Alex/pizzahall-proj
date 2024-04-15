import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

import { userSignOut } from "./../../services/api/authApi";

import profileStyles from "./profileStyles";
import globalStyles from "../../globalStyles";

export default function ProfileInfos({ userProfile }) {
	const handleSignOutButton = () => {
		userSignOut();
		router.navigate("(app)");
	};
	return (
		<View style={profileStyles.ProfileInfos}>
			<View style={profileStyles.fieldContainer}>
				<Text style={profileStyles.fieldLabel}>Pedidos</Text>
				<View
					style={[
						globalStyles.components.centeredBorder,
						{ backgroundColor: globalStyles.colors.black },
					]}
				/>
			</View>
			<View style={profileStyles.fieldContainer}>
				<Text style={profileStyles.fieldLabel}>
					Formas de pagamento
				</Text>
				<View
					style={[
						globalStyles.components.centeredBorder,
						{ backgroundColor: globalStyles.colors.black },
					]}
				/>
			</View>
			<View style={profileStyles.fieldContainer}>
				<Text style={profileStyles.fieldLabel}>Endereço</Text>
				<View
					style={[
						globalStyles.components.centeredBorder,
						{ backgroundColor: globalStyles.colors.black },
					]}
				/>
			</View>
			<View style={profileStyles.fieldContainer}>
				<Text style={profileStyles.fieldLabel}>Fale Conosco</Text>
				<View
					style={[
						globalStyles.components.centeredBorder,
						{ backgroundColor: globalStyles.colors.black },
					]}
				/>
			</View>
			<Pressable
				onPress={handleSignOutButton}
				style={profileStyles.signOutButton}>
				<Text style={profileStyles.signOutButtonText}>
					Sair da conta
				</Text>
			</Pressable>
		</View>
	);
}
