import { Pressable, Text, View } from "react-native";

import productStyles from "../Product/productStyles";

import CloseIcon from "../../assets/icons/closeIcon.svg";
import menuStyles from "./menuStyles";
import globalStyles from "../../globalStyles";

export default function ShowMenuProduct({ product = {}, pressHandler }) {
	return (
		<View style={menuStyles.ShowMenuProduct}>
			<View style={menuStyles.ShowMenuProductDetails}>
				<Text
					numberOfLines={1}
					style={menuStyles.ShowMenuProductDetailsText}>
					{product["name"] ? product["name"] : "Sem nome"}
				</Text>
				<View style={productStyles.sizeMark}>
					<Text style={productStyles.sizeMarkText}>
						{product["size"] ? product["size"][0] : "??"}
					</Text>
				</View>
				<Text>
					{product["price"] ? product["price"].toFixed(2) : ""}
				</Text>
				<Text>{product["quantity"] ? product["quantity"] : 0}</Text>
			</View>
			<Pressable
				onPress={() => pressHandler(product)}
				style={menuStyles.ShowMenuProductButton}>
				<CloseIcon
					width={24}
					height={24}
					fill={globalStyles.colors.gray}
				/>
			</Pressable>
		</View>
	);
}
