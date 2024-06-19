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

		setUserLocation(formatLocation(response.coords));
		console.log(response.coords);
	};

	const formatLocation = (coords) => {
		return {
			latitude: parseFloat(coords.latitude),
			longitude: parseFloat(coords.longitude),
			latitudeDelta: 0.005,
			longitudeDelta: 0.005,
		};
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
				setUserLocation(formatLocation(response.coords));
				console.log(response.coords);
			}
		);
	}, []);

	return (
		<View style={mapStyles.MapPreview}>
			<MapView
				provider={PROVIDER_GOOGLE}
				initialRegion={userLocation}
				mapType="hybrid"
				scrollEnabled
				zoomEnabled
				rotateEnabled
				followsUserLocation
				userInterfaceStyle="dark"
				showsUserLocation
				style={globalStyles.components.img}
			/>
		</View>
	);
}
