import { useContext, useEffect } from "react";
import { Tabs } from "expo-router";
import { Toast } from "toastify-react-native";

import { UserAuthContext } from "../../contexts/UserAuthContext";

import globalStyles from "../../globalStyles";

import BagIcon from "../../assets/icons/bagIcon.svg";
import PizzaIcon from "../../assets/icons/pizzaIcon.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";

export default function TabsLayout() {
	const { verifyAlreadyAuthenticated } = useContext(UserAuthContext);

	const handleUserSignedIn = () => {
		if (verifyAlreadyAuthenticated()) {
			Toast.success("Bem-vindo(a) de volta!");
		}
	};

	useEffect(() => {
		handleUserSignedIn();
	}, []);

	return (
		<Tabs
			initialRouteName="index"
			backBehavior="initialRoute"
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarActiveTintColor: globalStyles.colors.black,
				tabBarInactiveTintColor: globalStyles.colors.gray,
				tabBarStyle: { backgroundColor: globalStyles.colors.snowWhite },
			}}>
			<Tabs.Screen
				name="Orders"
				options={{
					title: "Pedidos",
					tabBarIcon: ({ color }) => (
						<BagIcon width={32} height={32} fill={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="index"
				options={{
					title: "Hall",
					tabBarIcon: ({ color }) => (
						<PizzaIcon width={32} height={32} fill={color} />
					),
				}}
			/>

			<Tabs.Screen
				name="Profile"
				options={{
					title: "Perfil",
					tabBarIcon: ({ color }) => (
						<ProfileIcon width={32} height={32} fill={color} />
					),
				}}
			/>
		</Tabs>
	);
}
