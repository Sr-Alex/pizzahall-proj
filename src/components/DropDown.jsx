import { Pressable, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import globalStyles from "../globalStyles";

import ArrowIcon from "../assets/icons/arrowIcon.svg";

export default function DropDown({ title, children }) {
	const [droppedDown, setDroppedDown] = useState(false);

	const toogleDroppedDown = () => {
		setDroppedDown(!droppedDown);
	};

	return (
		<View style={style.container}>
			<Pressable onPress={toogleDroppedDown} style={style.controller}>
				<Text style={style.title}>{title}</Text>
				<ArrowIcon
					width={24}
                         height={24}
                         fill={globalStyles.colors.gray}
					style={droppedDown ? style.iconDown : style.iconRight}
				/>
			</Pressable>
			{droppedDown ? (
				<View style={style.DropDown}>{children}</View>
			) : (
				<></>
			)}
			<View
				style={[
					globalStyles.components.centeredBorder,
					{ backgroundColor: globalStyles.colors.gray },
				]}
			/>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		gap: 8,
	},

	controller: {
		flexDirection: "row",
		alignItems: "center",
		gap: 4,

		height: 32,
	},

	iconRight: {
		transform: [{ rotateZ: "0deg" }],
	},

	iconDown: {
		transform: [{ rotateZ: "90deg" }],
	},

	title: {
		fontSize: 18,
		fontWeight: "600",

		color: globalStyles.colors.black,
	},

     DropDown: {
          marginBottom: 16,
	},
});
