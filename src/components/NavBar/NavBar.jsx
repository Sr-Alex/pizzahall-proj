import { Link } from "expo-router";
import { Text, View } from "react-native";

import globalStyles from "../../globalStyles";
import navBarStyles from "./navBarStyles";

import CartIcon from "../../assets/icons/cartIcon.svg";
import PizzaIcon from "../../assets/icons/pizzaIcon.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";

export default function NavBar() {
	return (
		<View style={navBarStyles.MainNavBar}>
			<View style={navBarStyles.iconsRow}>
				<Link
					href={"home/OrdersLayout"}
					style={navBarStyles.iconContianer}>
					<CartIcon
						width={32}
						height={32}
						fill={globalStyles.colors.gray}
					/>
				</Link>
				<Link
					href={"home/MapLayout"}
					style={navBarStyles.iconContianer}>
					<PizzaIcon
						width={32}
						height={32}
						fill={globalStyles.colors.gray}
					/>
				</Link>
				<Link
					href={"home/ProfileLayout"}
					style={navBarStyles.iconContianer}>
					<ProfileIcon
						width={32}
						height={32}
						fill={globalStyles.colors.gray}
					/>
				</Link>
				<View style={navBarStyles.selectedMark} />
			</View>
			<View>
				<Text style={navBarStyles.navBarDescription}>[Aba aberta]</Text>
			</View>
		</View>
	);
}
