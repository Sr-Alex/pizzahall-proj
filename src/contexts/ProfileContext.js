import { createContext, useState } from "react";
import { getUserInfos, patchUserInfos } from "../services/api/userAPI";

export const ProfileContext = createContext(null);

export function ProfileContextProvider({ children }) {
	const [profile, setProfile] = useState({});

	const getProfileInfos = async () => {
		const auth = await secure.getStoredAuth();

		if (!auth || !auth["id"] || !auth["token"]) return;

		const response = await getUserInfos(auth["id"]);

		if (!response) return;

		setProfile(response);
	};

	const modifyUser = async (newInfos) => {
		const auth = await secure.getStoredAuth();
		const response = await patchUserInfos(auth.id, auth.token, newInfos);

		if (!response) return null;
	};

	return (
		<ProfileContext.Provider
			value={{ profile, getProfileInfos, modifyUser }}>
			{children}
		</ProfileContext.Provider>
	);
}
