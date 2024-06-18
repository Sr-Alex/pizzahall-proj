import { useEffect, useState } from "react";
import {
	Pressable,
	View,
	Text,
	StyleSheet,
	Image,
	ActivityIndicator,
} from "react-native";
import { setStringAsync } from "expo-clipboard";
import { useLocalSearchParams } from "expo-router";
import { Toast } from "toastify-react-native";

import { getPayment } from "../../services/api/orderApi";

import globalStyles from "./../../globalStyles";
import orderStyles from "./../../components/Orders/orderStyles";

export default function Payment() {
	const { id } = useLocalSearchParams();
	const [qrCode, setQrCode] = useState(null);
	const [payload, setPayload] = useState(null);

	const handleGetPayment = async () => {
		if (!id) return;

		const response = await getPayment(id);
		const { payload, qrCode } = response;

		if (!response || !payload) return;

		setPayload(payload);
		setQrCode(qrCode);
	};

	const copyToCLipBoard = async () => {
		if (!payload) {
			return Toast.warn("Nenhum código de pagamento identificado.");
		}

		const response = await setStringAsync("Dado copiado com sucesso");

		if (!response) {
			return Toast.warn("O código de pagamento não pôde ser copiado.");
		}

		return Toast.success("Código de pagamento copiado com sucesso!");
	};

	useEffect(() => {
		handleGetPayment();
	}, [id]);

	return (
		<View style={styles.container}>
			<View style={orderStyles.paymentContainer}>
				<Text style={globalStyles.fontSizes.large}>Nome Pizzaria</Text>
				<View style={orderStyles.qrCodeContainer}>
					{qrCode ? (
						<Image
							src=""
							alt="QrCode"
							style={globalStyles.components.img}
						/>
					) : (
						<ActivityIndicator
							color={globalStyles.colors.gray}
							size={"large"}
						/>
					)}
				</View>
				<View style={orderStyles.paymentCodeContainer}>
					<Pressable style={{ gap: 4 }} onPress={copyToCLipBoard}>
						<Text style={globalStyles.fontSizes.medium}>
							Código de pagamento:{" "}
							<Text style={{ color: globalStyles.colors.gray }}>
								(clique para copiar)
							</Text>
						</Text>
						{payload && (
							<Text
								style={[
									globalStyles.fontSizes.extraSmall,
									{
										textDecorationLine: "underline",
									},
								]}>
								{payload}
							</Text>
						)}
					</Pressable>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		width: "100%",

		backgroundColor: globalStyles.colors.orange,
	},
});
