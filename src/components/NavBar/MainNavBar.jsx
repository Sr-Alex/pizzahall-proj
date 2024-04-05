import { View } from "react-native";

import globalStyles from "../../globalStyles";
import navBarStyles from "./navBarStyles";

import CartIcon from "../../assets/icons/cartIcon.svg";
import PizzaIcon from "../../assets/icons/pizzaIcon.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";

export default function MainNavBar() {
	return (
		<View style={navBarStyles.MainNavBar}>
			<View style={navBarStyles.iconContianer}>
				<CartIcon
					width={32}
					height={32}
					fill={globalStyles.colors.gray}
				/>
			</View>
			<View style={navBarStyles.iconContianer}>
				<PizzaIcon
					width={32}
					height={32}
					fill={globalStyles.colors.gray}
				/>
			</View>
			<View style={navBarStyles.iconContianer}>
				<ProfileIcon
					width={32}
					height={32}
                         fill={globalStyles.colors.gray}
				/>
			</View>
		</View>
	);
}
