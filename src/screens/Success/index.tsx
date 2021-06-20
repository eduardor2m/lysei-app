import React, { useEffect, useCallback } from 'react';
import { StatusBar } from 'react-native';
import { StackActions, useFocusEffect } from '@react-navigation/native';

import {
	Container,
	Title,
	Description,
	SuccessBox,
	Button,
	ButtonText,
} from './styles';

import SuccessSvg from '../../assets/success.svg';

export function Success({ navigation }: any) {

	const popAction = StackActions.pop(2);

	function handleHome() {
		navigation.dispatch(popAction);
		navigation.navigate('Feed');
	}

	useFocusEffect(useCallback(() => {
        const parent = navigation.dangerouslyGetParent();
		parent.setOptions({
			tabBarVisible: false
		});
    }, []));

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>

			<SuccessBox>
				<SuccessSvg
					width={60}
					height={60}
				/>
			</SuccessBox>

			<Title>Sucesso</Title>

			<Description>
				Sua ocorrência foi cadastrada{'\n'}
				com sucesso e já está{'\n'}disponível!
			</Description>

			<Button
				onPress={handleHome}
			>
				<ButtonText>Voltar para a Home</ButtonText>
			</Button>
		</Container>
	);
}