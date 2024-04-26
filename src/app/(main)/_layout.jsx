import { Tabs } from "expo-router";
import globalStyles from "../../globalStyles";

import BagIcon from "../../assets/icons/bagIcon.svg";
import PizzaIcon from "../../assets/icons/pizzaIcon.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";

export default function TabsLayout() {
	return (
		<Tabs
			initialRouteName="index"
			backBehavior="initialRoute"
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: globalStyles.colors.black,
				tabBarInactiveTintColor: globalStyles.colors.gray,
				tabBarShowLabel: true,
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
