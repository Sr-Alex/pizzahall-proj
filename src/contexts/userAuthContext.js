import { createContext, useState } from "react";
import { loginUser } from "../services/api/userAPI";

import secure from "../services/secure";

export const UserAuthContext = createContext(null);

export function UserAuthContextProvider({ children }) {
	const [userSignedIn, setUserSignedIn] = useState(false);

	const verifyAlreadyAuthenticated = async () => {
		const auth = await secure.getStoredAuth();

		if (!auth || !auth["id"] || !auth["token"]) {
			setUserSignedIn(false);
			return false;
		}

		setUserSignedIn(true);
		return true;
	};

	const makeLogin = async (data) => {
		const response = await loginUser(data);

		if (!response) {
			setUserSignedIn(false);
			return null;
		}

		setUserSignedIn(true);
		return true;
	};

	const getId = async () => {
		const auth = await secure.getStoredAuth();

		if (!auth || !auth["id"] || !auth["token"]) {
			setUserSignedIn(false);
			return false;
		}

		return auth["id"];
	};

	const signOut = async () => {
		await secure.deleteStoredAuth();
		setUserSignedIn(false);
	};

	return (
		<UserAuthContext.Provider
			value={{
				userSignedIn,
				setUserSignedIn,
				verifyAlreadyAuthenticated,
				makeLogin,
				signOut,
				getId,
			}}>
			{children}
		</UserAuthContext.Provider>
	);
}
