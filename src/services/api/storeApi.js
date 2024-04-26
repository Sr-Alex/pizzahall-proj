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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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
		id: "12e7cf06-bc03-4a5e-8aed-a08165ae0d98",
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