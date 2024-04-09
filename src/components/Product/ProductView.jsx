import { Image, View } from "react-native";
import productStyles from "./productStyles";

import PizzaLogo from "../../assets/img/pizza.jpg";

export default function ProductView(product = {}) {
	return (
		<View>
			<View style={productStyles.productView}>
				<Image
					source={product["logo"] ? product["logo"] : PizzaLogo}
					style={globalStyles.components.img}
				/>
			</View>
		</View>
	);
}
