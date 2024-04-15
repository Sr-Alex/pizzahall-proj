import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import UserAuthContext from "../contexts/UserAuthContext";

import secure from "./../services/secure";

export default function AppLayout() {
	const [userAuth, setUserAuth] = useState(null);

	const isAlredySignedIn = async () => {
		let infos = await secure.getUserInfos();

		if (infos.token && infos.id) setUserAuth(infos);
	};

	useEffect(() => {
		isAlredySignedIn();
		console.log(userAuth);
	}, []);

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
