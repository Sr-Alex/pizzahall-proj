import apiURL from "./apiSecret";
import secure from "../secure";

const formatRegisterBody = (data) => {
	const res = JSON.stringify({
		nome: data.nome,
		email: data.email,
		password: data.password,
		confirm: data.passwordconfirm,
		isGoogle: "True",
		googleId: "",
		isCliente: "True",
	});
	res;
	return res;
};

export const loginUser = async (loginData) => {
	return fetch(`${apiURL}login/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(loginData),
	})
		.then((res) => {
			res.status;
			switch (res.status) {
				case 200:
					return res.json();
				default:
					return new Error(res.status);
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
	return fetch(`${apiURL}`, {
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
			console.error(`Falha ao registrar usuário: ${error}`);
			return null;
		});
};

export const getUserInfos = async (userId) => {
	return fetch(`${apiURL}?id=${userId}`)
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
			console.error(`Erro ao buscar usuário: ${error}`);
			return null;
		});
};

export const patchUserInfos = async (userId, token, data) => {
	return fetch(`${apiURL}?id=${userId}`, {
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
			console.warn(`Falha ao modificar usuário: ${error.message}`);
			return null;
		});
};
