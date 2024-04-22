import { Image, View } from "react-native";
import productStyles from "./productStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function ProductView({ product = {} }) {
	return (
		<View>
			<View style={productStyles.productView}>
				<Image
					source={{
						uri: product["logo"],
					}}
					defaultSource={PizzaLogo}
					style={globalStyles.components.img}
				/>
			</View>
		</View>
	);
}
