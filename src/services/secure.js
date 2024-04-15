import * as SecureStore from "expo-secure-store";

const getUserInfos = async () => {
	const infos = await Promise.all([
		SecureStore.getItemAsync("token"),
		SecureStore.getItemAsync("id"),
	]);

	return {
		token: infos[0],
		id: infos[1],
	};
};

const setUserInfos = async (values = {}) => {
	await SecureStore.setItemAsync("token", values.token);
	await SecureStore.setItemAsync("id", values.id);
};

const deleteUserInfos = async () => {
	await SecureStore.deleteItemAsync("token");
	await SecureStore.deleteItemAsync("id");
};

export default secure = {
	getUserInfos,
	setUserInfos,
	deleteUserInfos,
};
