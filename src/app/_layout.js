import { Stack } from "expo-router";
import { useEffect, useState } from "react";

import UserAuthContext from "../contexts/UserAuthContext";

import secure from "./../services/secure";
import ToastManager, { Toast } from "toastify-react-native";

export default function AppLayout() {
	const [userSignedIn, setUserSignedIn] = useState(false);

	const isAlreadySignedIn = async () => {
		let infos = await secure.getStoredAuth();

		if (!infos || (!infos["token"] && !infos["id"])) {
			setUserSignedIn(false);
		} else {
			setUserSignedIn(true);
			console.log("logado");

			Toast.success("Bem-vindo(a) de volta!");
		}
	};

	useEffect(() => {
		isAlreadySignedIn();
		console.log("Usuário não está logado");
	}, []);

	return (
		<UserAuthContext.Provider value={{ userSignedIn, setUserSignedIn }}>
			<ToastManager
				position={"top"}
				width={"80%"}
				height={64}
				duration={3000}
				textStyle={{ fontSize: 14, width: "80%" }}
				positionValue={16}
			/>
			<Stack
				initialRouteName="(main)"
				screenOptions={{ headerShown: false }}></Stack>
		</UserAuthContext.Provider>
	);
}
