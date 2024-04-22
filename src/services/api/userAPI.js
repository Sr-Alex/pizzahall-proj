import apiURL from "./apiSecret";
import secure from "../secure";

const formatRegisterBody = (data) => {
	return JSON.stringify({
		nome: data.nome,
		email: data.email,
		password: data.password,
		passwordconfirm: data.passwordconfirm,
		cpf: "",
		telefone: "",
		is_google: "false",
		id_google: "",
		is_cliente: "True",
	});
};

export const loginUser = async (loginData) => {
	return await fetch(`${apiURL}login/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	})
		.then((res) => {
			switch (res.status) {
				case 200:
					return res.json();
				default:
					return res.status;
			}
		})
		.then((data) => {
			secure.setStoredAuth(data);
			return data;
		})
		.catch((error) => {
			console.error(error);
			return null;
		});
};

export const registerUser = async (registerData) => {
	return await fetch(`${apiURL}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: formatRegisterBody(registerData),
	})
		.then((res) => {
			switch (res.status) {
				case 201:
					return res.json();
				default:
					throw new Error(res.status);
			}
		})
		.then((data) => {
			secure.setStoredAuth(data);
			return data;
		})
		.catch((error) => {
			console.warn(error);
			return null;
		});
};

export const getUserInfos = async (userId) => {
	return await fetch(`${apiURL}?id=${userId}`)
		.then((res) => {
			switch (res.status) {
				case 200:
					return res.json();
				default:
					throw new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(error);
			return null;
		});
};

export const patchUserInfos = async (userId, token, data) => {
	return await fetch(`${apiURL}?id=${userId}`, {
		method: "PATCH",
		headers: {
			"Authorization": `"Bearer ${token}`,
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((res) => {
			switch (res.status) {
				case 200:
					return res.json();
				default:
					throw new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(error);
			return null;
		});
};

export const userSignOut = async () => {
	await secure.deleteStoredAuth();
};
