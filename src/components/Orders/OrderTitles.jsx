import { View, Text, Pressable } from "react-native";

import orderStyles from "./orderStyles";
import globalStyles from "../../globalStyles";

export default function OrderTitles({ firstList = true, setFirstList }) {
	const setFirst = () => {
		setFirstList(true);
	};
	const setSecond = () => {
		setFirstList(false);
	};

	return (
		<View style={orderStyles.titleContainer}>
			<View style={orderStyles.titleContainer}>
				<Text style={orderStyles.title}>Pedidos</Text>
			</View>
			<View style={orderStyles.scrollTitlesContainer}>
				<Pressable
					onPress={setFirst}
					style={[
						orderStyles.scrollTitleBox,
						{
							borderBottomColor: firstList
								? globalStyles.colors.orange
								: globalStyles.colors.lightGray,
						},
					]}>
					<Text
						style={[
							orderStyles.scrollTitle,
							{
								color: firstList
									? globalStyles.colors.orange
									: globalStyles.colors.gray,
							},
						]}>
						Em andamento
					</Text>
				</Pressable>
				<Pressable
					onPress={setSecond}
					style={[
						orderStyles.scrollTitleBox,
						{
							borderBottomColor: firstList
								? globalStyles.colors.lightGray
								: globalStyles.colors.orange,
						},
					]}>
					<Text
						style={[
							orderStyles.scrollTitle,
							{
								color: firstList
									? globalStyles.colors.gray
									: globalStyles.colors.orange,
							},
						]}>
						Anteriores
					</Text>
				</Pressable>
			</View>
		</View>
	);
}
