import apiURL from "./apiSecret";
import secure from "./../secure";

const formatRegisterBody = (data) => {
	console.log(data);
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
			secure.setUserInfos(data);
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
			secure.setUserInfos(data);
			return data;
		})
		.catch((error) => {
			console.warn(error);
			return null;
		});
};

export const signOut = async () => {
	await secure.deleteUserInfos();
};
