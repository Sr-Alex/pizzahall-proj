import { Image, Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

import storeStyles from "./storeStyles";
import globalStyles from "./../../globalStyles";

import PizzariaLogo from "../../assets/img/pizza.jpg";

export default function StoreMiniature({ store = {} }) {
	return (
		<Link disabled={!store["id"]} href={`/store/${store["id"]}`} asChild>
			<Pressable>
				<View style={storeStyles.StoreMiniature}>
					<View style={storeStyles.StoreMiniatureLogo}>
						<Image
							source={PizzariaLogo}
							style={globalStyles.components.img}
						/>
					</View>
					<View>
						<Text style={storeStyles.miniatureTitle}>
							{store["nome"] || "Empresa sem nome"}
						</Text>
						<Text style={storeStyles.miniatureText}>
							Estado X, Rua lorem, N°Y
						</Text>
						<Text style={storeStyles.miniatureText}>
							{store["horario"]
								? `${store["horario"][0] || "h"} - ${
										store["horario"][1] || "h"
								  }`
								: "HH:MM - HH:MM"}
						</Text>
					</View>
				</View>
			</Pressable>
		</Link>
	);
}
