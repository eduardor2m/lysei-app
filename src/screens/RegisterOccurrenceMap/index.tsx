import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import MapView, {
	Marker,
	MapEvent,
	PROVIDER_GOOGLE,
	Region
} from 'react-native-maps';
import * as Location from "expo-location";
import LottieView from 'lottie-react-native';

import loadMap from '../../assets/loadMap.json'
import point from '../../assets/point.png'

import {
	Container,
	Button,
	TextButton,
	LoadContent
} from './styles';

export function RegisterOccurrenceMap({ navigation }: any) {

	const [region, setRegion] = useState<Region>();
	const [position, setPosition] = useState({ latitude: 0, longitude: 0 });

	function handleSelectMapPosition(event: MapEvent) {

		let latitude = event.nativeEvent.coordinate.latitude;
		let longitude = event.nativeEvent.coordinate.longitude;

		setPosition(event.nativeEvent.coordinate);
		setRegion({ latitude, longitude, latitudeDelta: 0.008, longitudeDelta: 0.008 });
	}

	function handleRegisterOccurrence(){
		navigation.navigate('RegisterOccurrence');
	}

	async function getCurrentPosition() {
		let { status } = await Location.requestForegroundPermissionsAsync();

		if (status !== "granted") {
			Alert.alert("Ops!", "Permissão de acesso a localização negada.");
		}

		let {
			coords: { latitude, longitude },
		} = await Location.getCurrentPositionAsync();

		setRegion({ latitude, longitude, latitudeDelta: 0.008, longitudeDelta: 0.008 });
		setPosition({ latitude, longitude })
	};

	useEffect(() => {
		getCurrentPosition();
	}, []);

	return (
		<Container>
			{
				region == undefined ?
					<LoadContent>
						<LottieView
							source={loadMap}
							style={{ height: 200 }}
							resizeMode="contain"
							autoPlay
							loop
						/>
					</LoadContent>
					:
					<>
						<MapView
							provider={PROVIDER_GOOGLE}
							style={{ flex: 1 }}
							region={region}
							initialRegion={{
								latitude: -14.1333023,
								longitude: -59.9988083,
								latitudeDelta: 100,
								longitudeDelta: 100,
							}}
							onPress={handleSelectMapPosition}
						>

							{position.latitude != 0 && (
								<Marker
									icon={point}
									coordinate={{ latitude: position.latitude, longitude: position.longitude }}
								/>
							)}

						</MapView>

						<Button onPress={handleRegisterOccurrence} enabled={!!position.latitude} style={{opacity: position.latitude != 0 ? 1 : .5}}>
							<TextButton>Adicionar ocorrência</TextButton>
						</Button>
					</>
			}

		</Container>
	);
}