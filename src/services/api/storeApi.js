import apiURL from "./apiSecret";

export const getAllStores = async () => {
	return fetch("https://api-pizzahall.onrender.com/pizzarias/")
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
			console.warn(`Falha ao buscar pizzarias: ${error}`);
			return null;
		});
};

export const getStore = async (storeId) => {
	return fetch(`${apiURL}pizzarias/?id=${storeId}`)
		.then((res) => {
			console.log(storeId);
			switch (res.status) {
				case 200:
					return res.json();
				default:
					return new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(`Falha ao buscar pizzaria: ${error}`);
			return null;
		});
};

export const getProduct = async (productId) => {
	return fetch(`${apiURL}produtos/?id=${productId}`)
		.then((res) => {
			console.log(res.url);
			switch (res.status) {
				case 200:
					return res.json();
				default:
					return new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(`Falha ao buscar produtos: ${error}`);
			return null;
		});
};

export const getStoreProducts = async (storeId) => {
	return fetch(`${apiURL}produtos/?pizzaria=${storeId}`)
		.then((res) => {
			switch (res.status) {
				case 200:
					return res.json();
				default:
					return new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(`Falha ao buscar produtos: ${error}`);
			return null;
		});
};
