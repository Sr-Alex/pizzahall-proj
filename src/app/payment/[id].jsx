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
import base64 from "react-native-base64";
import { SvgXml } from "react-native-svg";

export default function Payment() {
	const { id } = useLocalSearchParams();
	const [paymentInfos, setPaymentInfos] = useState({});
	const [qrCode, setQrCode] = useState(null);
	const [payload, setPayload] = useState(null);

	const handleGetPayment = async () => {
		if (!id) return;

		const response = await getPayment(id);
		const { payload, png } = response;

		if (!response || !payload)
			return Toast.error("Erro ao buscar dados de pagamento.");

		setPaymentInfos(response);
		setPayload(payload);
		setQrCode(base64.decode(png));
	};

	const copyToCLipBoard = async () => {
		if (!payload) {
			return Toast.warn("Nenhum código de pagamento identificado.");
		}

		const response = await setStringAsync(payload);

		if (!response) {
			return Toast.warn("O código de pagamento não pôde ser copiado.");
		}

		return Toast.success("Código de pagamento copiado com sucesso!");
	};

	useEffect(() => {
		handleGetPayment();
	}, []);

	return (
		<View style={styles.container}>
			<View style={orderStyles.paymentContainer}>
				<Text style={globalStyles.fontSizes.large}>
					{paymentInfos ? paymentInfos["nome"] : "..."}
				</Text>
				<View style={orderStyles.qrCodeContainer}>
					{qrCode ? (
						<SvgXml xml={qrCode} width={"100%"} height={"100%"} />
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
