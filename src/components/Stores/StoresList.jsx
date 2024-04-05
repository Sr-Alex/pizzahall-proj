import { ScrollView, View } from "react-native";

import globalStyles from "../../globalStyles";
import storeStyles from "./storeStyles";

import StoreMiniature from "./StoreMiniature";

export default function StoresList() {
	return (
		<View style={storeStyles.StoreList}>
			<ScrollView style={globalStyles.components.scroller}>
				{Array.from({ length: 6 }).map((_, index) => (
					<StoreMiniature key={index} storeObject={{ index }} />
				))}
			</ScrollView>
		</View>
	);
}
