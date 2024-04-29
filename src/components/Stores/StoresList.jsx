import { FlatList, View } from "react-native";

import globalStyles from "../../globalStyles";
import storeStyles from "./storeStyles";

import StoreMiniature from "./StoreMiniature";

export default function StoresList({ stores = [] }) {
	return (
		<View style={storeStyles.StoreList}>
			<FlatList
				data={stores}
				renderItem={({ item }) => <StoreMiniature store={item} />}
				keyExtractor={(_, index) => index}
				ItemSeparatorComponent={() => (
					<View
						style={[
							globalStyles.components.centeredBorder,
							{ backgroundColor: globalStyles.colors.black, marginVertical: 16 },
						]}
					/>
				)}
				alwaysBounceVertical
				bounces
			/>
		</View>
	);
}
