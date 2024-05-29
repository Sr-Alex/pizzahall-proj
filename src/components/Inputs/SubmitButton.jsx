import { ActivityIndicator, Pressable, StyleSheet } from "react-native";
import globalStyles from "../../globalStyles";

export default function SubmitButton({
	disabled = false,
	loading = false,
	onPress = () => {},
	children,
}) {
	return (
		<Pressable
			disabled={disabled || loading}
			onPress={onPress}
			style={[
				styles.button,
				disabled || loading
					? styles.buttonDisabled
					: styles.buttonEnabled,
			]}>
			{loading ? (
				<ActivityIndicator
					size={"large"}
					color={globalStyles.colors.offWhite}
				/>
			) : (
				children
			)}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	button: {
		justifyContent: "center",

		width: 224,
		height: 48,
		marginTop: 20,

		borderRadius: 8,
	},

	buttonEnabled: {
		backgroundColor: globalStyles.colors.green,
	},
	buttonDisabled: {
		backgroundColor: globalStyles.colors.gray,
	},
});
