import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import storeStyles from "./storeStyles";
import globalStyles from "./../../globalStyles";

import PizzariaLogo from "../../assets/img/pizza.jpg";

export default function StoreMiniature({ store = {} }) {
	return (
		<Link
			disabled={!store["id"]}
			href={`/store/${store["id"]}`}
			asChild>
			<Pressable>
				<View style={storeStyles.StoreMiniature}>
					<View style={storeStyles.StoreMiniatureLogo}>
						<Image
							source={
								store["imgUrl"]
									? { uri: store["imgUrl"] }
									: PizzariaLogo
							}
							style={globalStyles.components.img}
						/>
					</View>
					<View>
						<Text style={storeStyles.miniatureTitle}>
							{store["name"] || "Empresa sem nome"}
						</Text>
						<Text style={storeStyles.miniatureText}>
							Estado X, Rua lorem, N°401
						</Text>
						<Text style={storeStyles.miniatureText}>
							{`${store["horario"][0] || "h"} - ${
								store["horario"][1] || "h"
							}`}
						</Text>
					</View>
				</View>
			</Pressable>
		</Link>
	);
}
