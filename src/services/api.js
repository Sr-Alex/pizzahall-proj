const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const loginUser = async (loginData) => {
	console.log(JSON.stringify(loginData));
	fetch(`${apiUrl}login/`, {
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
					return res.statusText;
				case 500:
					return res.statusText;
			}
			return res.json();
		})
		.then((data) => {
			console.log(data);
			return data;
		});
};

export const registerUser = async (registerData) => {
	fetch(`${apiUrl}`, {
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
					return res.statusText;
				case 500:
					return res.statusText;
			}
			return res.json();
		})
		.then((data) => {
			console.log(data);
			return data;
		})
		.catch((error) => console.log(error));
};
