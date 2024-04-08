import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import storeStyles from "./storeStyles";
import globalStyles from "./../../globalStyles";

export default function StoreMiniature({ store }) {
	return (
		<Link href={"home/MenuLayout"} asChild>
			<Pressable>
				<View style={storeStyles.StoreMiniature}>
					<View style={globalStyles.components.roundedImgContainer}>
						<Image
							source={require("../../assets/img/pizza.jpg")}
							style={globalStyles.components.img}
						/>
					</View>
					<View>
						<Text style={storeStyles.miniatureTitle}>
							Lorem ipsum
						</Text>
						<Text style={storeStyles.miniatureText}>
							Estado X, Rua lorem, N°401
						</Text>
						<Text style={storeStyles.miniatureText}>13h - 20h</Text>
					</View>
				</View>
				<View
					style={[
						globalStyles.components.centeredBorder,
						{ backgroundColor: globalStyles.colors.black },
					]}
				/>
			</Pressable>
		</Link>
	);
}
