import { StyleSheet } from "react-native";

export default globalStyles = {
	colors: {
		snowWhite: "#F9F9F9",
		offWhite: "#F5F5F5",
		gray: "#555555",
		lightGray: "#CDCDCD",
		darkPurple: "#301934",
		orange: "#F5BE14",
		black: "#1B1212",
	},

	components: StyleSheet.create({
		roundedImgContainer: {
			width: 64,
			height: 64,

			overflow: "hidden",

			borderRadius: 64,
		},
		img: {
			width: "100%",
			height: "100%",

			objectFit: "cover",
		},
	}),
};
