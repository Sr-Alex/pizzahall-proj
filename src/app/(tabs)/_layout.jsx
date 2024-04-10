import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: "blue",
			}}>
			<Tabs.Screen name="index" options={{ title: "index" }} />
		</Tabs>
	);
}
