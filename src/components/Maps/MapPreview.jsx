import { useState } from "react";
import { View } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import {
	LocationAccuracy,
	getCurrentPositionAsync,
	requestForegroundPermissionsAsync,
	watchPositionAsync,
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

		setUserLocation({
			latitude: response.coords.latitude,
			longitude: response.coords.longitude,
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		});
		console.log(response.coords);
	};

	useEffect(() => {
		requestLocationPermission();
	}, []);

	useEffect(() => {
		watchPositionAsync(
			{
				accuracy: LocationAccuracy.Highest,
				timeInterval: 2000,
				distanceInterval: 10,
			},
			(response) => {
				setUserLocation({
					latitude: response.coords.latitude,
					longitude: response.coords.longitude,
					latitudeDelta: 0.005,
					longitudeDelta: 0.005,
				});
			}
		);
		console.log("carregado");
	}, []);

	return (
		<View style={mapStyles.MapPreview}>
			<MapView
				provider={PROVIDER_GOOGLE}
				region={userLocation ? userLocation : {}}
				showsUserLocation
				style={globalStyles.components.img}
			/>
		</View>
	);
}
