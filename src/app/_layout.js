import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import UserAuthContext from "../contexts/UserAuthContext";

import secure from "./../services/secure";

export default function AppLayout() {
	const [userSignedIn, setUserSignedIn] = useState(false);

	const isAlredySignedIn = async () => {
		let infos = await secure.getUserInfos();

		if (infos.token && infos.id) setUserSignedIn(true);
		else setUserSignedIn(false);
	};

	useEffect(() => {
		isAlredySignedIn();
	}, []);

	return (
		<UserAuthContext.Provider value={{ userSignedIn }}>
			<Stack
				initialRouteName="(app)"
				screenOptions={{ headerShown: false }}></Stack>
		</UserAuthContext.Provider>
	);
}
