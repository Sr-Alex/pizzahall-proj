import apiSecret from "./apiSecret";

export const getPedidos = async (clienteId) => {
	return fetch(`${apiSecret}pedidos/?cliente=${clienteId}`)
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
			console.warn(`Falha ao buscar pedidos de usuário: ${error}`);
			return null;
		});
};

export const createPedido = async (dataCreate) => {
	return fetch(`${apiSecret}pedidos/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(dataCreate),
	})
		.then((res) => {
			console.log(res.status)
			switch (res.status) {
				case 200:
					return res.json();
				case 201:
					return res.json();
				default:
					return new Error(res.status);
			}
		})
		.then((data) => data)
		.catch((error) => {
			console.warn(`Falha ao buscar pedidos de usuário: ${error}`);
			return null;
		});
};

export const getPayment = async (order_id) => {
	return fetch(`${apiSecret}pagamento/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ id: order_id }),
	})
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
			console.warn(`Falha ao buscar dados de pagamento: ${error}`);
			return null;
		});
};
