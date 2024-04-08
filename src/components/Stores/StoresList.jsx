import { ScrollView, View } from "react-native";

import globalStyles from "../../globalStyles";
import storeStyles from "./storeStyles";

import StoreMiniature from "./StoreMiniature";

export default function StoresList({ stores = [] }) {
	return (
		<View style={storeStyles.StoreList}>
			<ScrollView style={globalStyles.components.scroller}>
				{stores.map((store, index) => (
					<StoreMiniature key={index} store={store} />
				))}
			</ScrollView>
		</View>
	);
}
