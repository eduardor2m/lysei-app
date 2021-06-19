import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { FlatList } from 'react-native';

import {
	Container,
	FilterBar,
	Input
} from './styles';

import { Publication } from '../../components/Publication';
import { Button } from '../../components/Button';

export function Feed({ navigation }: any) {

	const theme = useTheme();

	function handleToView(){

	}

	return (
		<Container>
			<FilterBar>
				<Input 
					placeholder="Sua cidade"
					autoCorrect={false}
					autoCapitalize="words"
					placeholderTextColor={theme.colors.text}
				/>

				<Feather 
					name="search"
					size={24}
					color={theme.colors.primary}
				/>
			</FilterBar>

			<FlatList
				data={[1,2,3]}
				keyExtractor={item => item.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Publication onPress={handleToView} coordinate={{latitude: 10, longitude: 10}} images={[]}/>
				)}
			/>
			
		</Container>
	);
}