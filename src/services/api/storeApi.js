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
		id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		name: "Pizzaria São Bento",
		status: "fechado",
		horario: ["08:00"],
		imgUrl: "https://picsum.photos/500",
	},
];

const pizzasPlaceholder = [
	{
		id: "8e8fd3a7-8bf6-4479-94f8-5f326eae31b1",
		pizzaria_id: "a912a063-2ef1-4878-86b4-66af3085779c",
		name: "Pizza Frango com catupiri",
		"preços": {
			"P": 30.20,
			"M": 35.00,
			"G": 40.00
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "7782020e-a171-41d0-8cfc-ff4f805f49f3",
		pizzaria_id: "a912a063-2ef1-4878-86b4-66af3085779c",
		name: "Pizza Portuguesa",
		"preços": {
			"P": 30.20,
			"M": 35.00,
			"G": 40.00,
			"F": 45.00
		},
		descrição: "",

		logo: "https://picsum.photos/500",
	},
	{
		id: "5298b56c-3de2-4ddb-a184-4633bde41f69",
		pizzaria_id: "a912a063-2ef1-4878-86b4-66af3085779c",
		name: "Pizza Brasileira",
		"preços": {
			"M": 35.00
		},
		descrição: "Mistura nacional!",

		logo: "https://picsum.photos/500",
	},

	{
		id: "8c71b8a6-1603-4d71-8935-4dcc1a178c92",
		pizzaria_id: "99595765-908a-4a9c-bd5a-b96948cd6c4e",
		name: "Pizza sabor Marguerita",
		"preços": {
			"P": 25.50,
			"M": 30.00,
			"F": 40.00
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "6b6cda50-38aa-4878-8035-e7fa7aa8404b",
		pizzaria_id: "99595765-908a-4a9c-bd5a-b96948cd6c4e",
		name: "Pizza sabor Napolitana",
		"preços": {
			"P": 25.50,
			"M": 30.00,
			"F": 40.00
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "16fe0923-5847-455a-a9af-c1f130bdf51d",
		pizzaria_id: "99595765-908a-4a9c-bd5a-b96948cd6c4e",
		name: "Pizza sabor Muçarela",
		"preços": {
			"P": 25.50,
			"F": 45.00
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},

	{
		id: "dd36f92d-8fed-4309-a90f-52794aa10829",
		pizzaria_id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		name: "Pizza sabor Lombo canadense ",
		"preços": {
			"M": 30.50,
			"G": 35.30
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "2d3f48c9-7362-4f02-b0f9-ed4d82c253dd",
		pizzaria_id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		name: "Pizza Quatro queijos ",
		"preços": {
			"M": 30.50,
			"F": 50.20
		},
		descrição: "A especialidade da casa.",

		logo: "https://picsum.photos/500",
	},
	{
		id: "8ffd2b0e-4ae5-41e6-883c-de13fcfa3bf3",
		pizzaria_id: "d6fc2f12-a1d0-48f6-971c-5d9f59ae0fa8",
		name: "Pizza sabor Califórnia ",
		"preços": {
			"P": 25.00,
			"M": 30.00,
			"F": 50.20
		},
		descrição: "A especialidade da casa.",

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

export const getStoreProducts = (storeId) => {
	return new Promise((res) => {
		res(pizzasPlaceholder.filter((prod) => prod["pizzaria_id"] == storeId));
	});
};