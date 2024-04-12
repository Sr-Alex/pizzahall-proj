import { useContext, useEffect } from "react";
import { Redirect, Tabs } from "expo-router";

import UserAuthContext from "./../../contexts/UserAuthContext";

export default function TabsLayout() {
	const { userAuth } = useContext(UserAuthContext);

	if (!userAuth ||  !userAuth["id"] || !userAuth["token"]) return <Redirect href="auth" />;

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
