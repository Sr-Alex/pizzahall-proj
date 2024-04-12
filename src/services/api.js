const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const loginUser = async (loginData) => {
	return await fetch(`${apiUrl}login/`, {
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
				case 400:
					throw new Error(res.status);
				case 500:
					throw new Error(res.status);
				default:
					return res.status;
			}
			return res.json();
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(error);
			return null;
		});
};

export const registerUser = async (registerData) => {
	return await fetch(`${apiUrl}`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(registerData),
	})
		.then((res) => {
			switch (res.status) {
				case 201:
					return res.json();
				case 400:
					return res.status;
				case 500:
					return res.status;
				default:
					return res.status;
			}
			return res.json();
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(error);
			return null;
		});
};
