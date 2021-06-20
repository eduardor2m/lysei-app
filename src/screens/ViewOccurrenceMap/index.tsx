import React, { useEffect, useState, useCallback } from 'react';
import MapView, {
	Marker,
	PROVIDER_GOOGLE,
} from 'react-native-maps';
import { useRoute } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';

import point from '../../assets/point.png'

import {
	Container,
	HeaderButton,
} from './styles';

interface Params {
	latitude: number;
	longitude: number;
}

export function ViewOccurrenceMap({ navigation }: any) {

	const routes = useRoute();
	const theme = useTheme();

	const { latitude, longitude } = routes.params as Params;

	useFocusEffect(useCallback(() => {
        const parent = navigation.dangerouslyGetParent();
		parent.setOptions({
			tabBarVisible: false
		});
    }, []));

	return (
		<Container>
			<HeaderButton
				onPress={() => navigation.goBack()}
			>
				<Feather
					name="chevron-left"
					size={24}
					color={theme.colors.secondary}
				/>
			</HeaderButton>

			<MapView
				provider={PROVIDER_GOOGLE}
				style={{ flex: 1 }}
				initialRegion={{
					latitude: latitude,
					longitude: longitude,
					latitudeDelta: 0.008,
					longitudeDelta: 0.008,
				}}
			>

				<Marker
					icon={point}
					coordinate={{ latitude: latitude, longitude: longitude }}
				/>

			</MapView>

		</Container>
	);
}