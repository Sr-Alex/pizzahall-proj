import { Stack } from "expo-router";

import { UserAuthContextProvider } from "../contexts/UserAuthContext";

import ToastManager from "toastify-react-native";

export default function AppLayout() {
	return (
		<UserAuthContextProvider>
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
		</UserAuthContextProvider>
	);
}
