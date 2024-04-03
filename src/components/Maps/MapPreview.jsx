import { Image, View } from "react-native";

import mapStyles from "./mapStyles";
import globalStyles from "../../globalStyles";

export default function MapPreview() {
	return (
		<View style={mapStyles.MapPreview}>
			<Image
				source={require("../../assets/img/worldMap.jpg")}
				style={globalStyles.components.img}
			/>
		</View>
	);
}
