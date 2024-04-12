import { Stack } from "expo-router";
import { useState } from "react";

import UserAuthContext from "../contexts/UserAuthContext";

export default function AppLayout() {
	const [userAuth, setUserAuth] = useState(null);

	return (
		<UserAuthContext.Provider value={{ userAuth, setUserAuth }}>
			<Stack
				initialRouteName="index"
				screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(app)" />
				<Stack.Screen name="auth" />
			</Stack>
		</UserAuthContext.Provider>
	);
}
