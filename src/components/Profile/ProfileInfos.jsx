import { Text, View } from "react-native";

import profileStyles from "./profileStyles";
import globalStyles from "../../globalStyles";

export default function ProfileInfos() {
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
		</View>
	);
}
