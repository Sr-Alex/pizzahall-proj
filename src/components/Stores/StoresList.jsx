import { View } from "react-native";

import storeStyles from "./storeStyles";
import StoreMiniature from "./StoreMiniature";

export default function StoresList() {
	return (
		<View style={storeStyles.StoreList}>
			{Array.from({ length: 6 }).map((_, index) => (
				<StoreMiniature key={index} storeObject={{ index }} />
			))}
		</View>
	);
}
