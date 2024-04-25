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
		green: "#50C878",
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

		centeredBorder: {
			alignSelf: "center",

			width: "50%",
			height: 1,
		},

		scroller: {
			width: "100%",
			height: "100%",
			gap: 8,

			overflow: "scroll",
		},

		formLabel: {
			fontSize: 16,
			fontWeight: "600",
			letterSpacing: 2,
		},
	}),

	fontSizes: {
		spaced: {
			fontSize: 20,
			fontWeight: "normal",
			letterSpacing: 2,
		},

		spacedTitle: {
			fontSize: 24,
			fontWeight: "bold",
			letterSpacing: 2,
		},

		spacedLabel: {
			fontSize: 16,
			fontWeight: "bold",
			letterSpacing: 2,
		},

		large: {
			fontSize: 24,
			fontWeight: "bold",
		},

		medium: {
			fontSize: 16,
			fontWeight: "600",
		},

		small: {
			fontSize: 16,
			fontWeight: "400",
		},
	},
};
