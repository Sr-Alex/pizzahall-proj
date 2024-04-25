import apiURL from "./apiSecret";

const storesPlaceholder = [
	{
		id: "a912a063-2ef1-4878-86b4-66af3085779c",
		name: "Lorenso Pizzas",
		status: "aberto",
		horario: ["10:00", "22:00"],
		imgUrl: "https://picsum.photos/500",
	},
	{
		id: "99595765-908a-4a9c-bd5a-b96948cd6c4e",
		name: "Pizzaria Nordestina",
		status: "aberto",
		horario: ["", "21:00"],
		imgUrl: "https://picsum.photos/500",
	},
	{
		name: "Pizzaria São Bento",
		id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		status: "fechado",
		horario: ["08:00"],
		imgUrl: "https://picsum.photos/500",
	},
];

const pizzasPlaceholder = [
	{
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
		pizzaria_id: "43cff103-1d6b-49d8-bc0e-0c8f7cf2a60a",
		name: "Pizza Frango com catupiri",
		preço: 30.0,
		tamanhos: ["P", "M"],
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "7782020e-a171-41d0-8cfc-ff4f805f49f3",
		pizzaria_id: "16ec1860-07ef-4411-8cab-5015a626b3fd",
		name: "Pizza Portuguesa",
		preço: 35.0,
		tamanhos: ["P", "M", "G", "F"],
		descrição: "",

		logo: "https://picsum.photos/500",
	},
	{
		id: "5298b56c-3de2-4ddb-a184-4633bde41f69",
		pizzaria_id: "7d926d0c-4fba-4d09-848b-42012925f1a3",
		name: "Pizza Brasileira",
		preço: 30.2,
		tamanhos: ["M"],
		descrição: "Mistura nacional!",

		logo: "https://picsum.photos/500",
	},
];

export const getAllStores = () => {
	return new Promise((res) => {
		return res(storesPlaceholder);
	});
};

export const getStore = (storeId) => {
	return new Promise((res) => {
		const filteredStore = storesPlaceholder.filter(
			(store) => store["id"] === storeId
		);
		return res(filteredStore ? filteredStore[0] : null);
	});
};

export const getStoreProducts = () => {
	return new Promise((res) => {
		return res(pizzasPlaceholder);
	});
};
