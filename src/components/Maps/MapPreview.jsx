import { useState } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
} from "expo-location";

import mapStyles from "./mapStyles";
import globalStyles from "../../globalStyles";
import { Toast } from "toastify-react-native";
import { useEffect } from "react";

export default function MapPreview() {
	const [userLocation, setUserLocation] = useState(null);

	const requestLocationPermission = async () => {
		const { granted } = await requestForegroundPermissionsAsync();
		const response = await getCurrentPositionAsync();

		if (!granted || !response) {
			return Toast.warn("Falha ao requisitar GoogleMaps");
		}

		setUserLocation(response);
		console.log(response);
	};

	useEffect(() => {
		requestLocationPermission();
	}, []);

	return (
		<View style={mapStyles.MapPreview}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={globalStyles.components.img}
			/>
		</View>
	);
}
