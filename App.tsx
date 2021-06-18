import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import AppLoading from 'expo-app-loading';

import { Routes } from './src/routes';

import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium,
	Roboto_900Black
} from '@expo-google-fonts/roboto';

export default function App() {

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium,
		Roboto_900Black
	});

	if (!fontsLoaded) {
		return <AppLoading />
	}
	return (
		<ThemeProvider theme={theme}>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="transparent"
			/>
			<Routes />
		</ThemeProvider>
	);
}

