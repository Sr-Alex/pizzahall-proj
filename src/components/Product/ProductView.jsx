import { Image, View } from "react-native";
import productStyles from "./productStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";
import globalStyles from "../../globalStyles";

export default function ProductView({ product = {} }) {
	return (
		<View>
			<View style={productStyles.ProductView}>
				<Image
					source={PizzaLogo}
					defaultSource={PizzaLogo}
					style={globalStyles.components.img}
				/>
			</View>
		</View>
	);
}
