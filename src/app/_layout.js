import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import UserAuthContext from "../contexts/UserAuthContext";

import secure from "./../services/secure";

export default function AppLayout() {
	const [userSignedIn, setUserSignedIn] = useState(false);

	const isAlreadySignedIn = async () => {
		let infos = await secure.getStoredAuth();

		if (!infos.token && !infos.id) {
			setUserSignedIn(false);
		} else {
			setUserSignedIn(true);
			console.log("logado");
		}
	};

	useEffect(() => {
		isAlreadySignedIn();
		console.log("Usuário não está logado");
	}, []);

	return (
		<UserAuthContext.Provider value={{ userSignedIn, setUserSignedIn }}>
			<Stack
				initialRouteName="(app)"
				screenOptions={{ headerShown: false }}></Stack>
		</UserAuthContext.Provider>
	);
}
