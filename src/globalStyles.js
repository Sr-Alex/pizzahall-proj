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
			aspectRatio: 1,

			overflow: "hidden",

			borderRadius: 256,
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

			overflow: "scroll",
		},

		formLabel: {
			fontSize: 16,
			fontWeight: "600",
			letterSpacing: 2,
		},

		topGoBackContainer: {
			justifyContent: "center",

			width: "100%",
			height: 96,

			paddingHorizontal: 16,
		},
	}),

	fontSizes: {
		spaced: {
			fontSize: 20,
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

		extraLarge: {
			fontSize: 24,
			fontWeight: "bold",
		},

		large: {
			fontSize: 20,
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

		extraSmall: {
			fontSize: 12,
			fontWeight: "400",
		},
	},
};
