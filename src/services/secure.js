import * as SecureStore from "expo-secure-store";

const getStoredAuth = async () => {
	const infos = JSON.parse(await SecureStore.getItemAsync("auth"));

	return infos;
};

const setStoredAuth = async (values = {}) => {
	await SecureStore.setItemAsync("auth", JSON.stringify(values));
};

const deleteStoredAuth = async () => {
	await SecureStore.deleteItemAsync("auth");
};

export default secure = {
	getStoredAuth,
	setStoredAuth,
	deleteStoredAuth,
};
