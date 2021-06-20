import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
	FlatList,
	Alert,
	Modal
} from 'react-native';

import {
	Container,
	FilterBar,
	Input
} from './styles';

import { Publication } from '../../components/Publication';
import { Select } from '../../components/Select';

import { StateSelect } from '../StateSelect';
import { CitySelect } from '../CitySelect';

interface UserStateCity{
	uf: string;
	city: string;
}

export function Feed({ navigation }: any) {

	const theme = useTheme();

	const [userUfCity, setUserUfCity] = useState<UserStateCity>({} as UserStateCity)

	const [uf, setUf] = useState('');
	const [ufModalOpen, setUfModalOpen] = useState(false);

	const [city, setCity] = useState('');
	const [cityModalOpen, setCityModalOpen] = useState(false);

	function handleOpenSelectUfModal() {
		setUfModalOpen(true);
	}

	function handleCloseSelectUfModal(item: string) {
		setCity('Cidade');
		setUf(item);
		setUfModalOpen(false);
	}

	function handleOpenSelectCityModal() {
		if (uf === 'Estado') {
			Alert.alert('Atenção', 'Selecione o estado primeiro!');
		} else {
			setCityModalOpen(true);
		}
	}

	function handleCloseSelectCityModal(item: string) {
		setCity(item)
		setCityModalOpen(false);
	}

	function handleToView() {

	}

	return (
		<Container>
			<FilterBar>
				<Select
					value={uf}
					isFilled={uf === 'Estado' ? false : true}
					border={false}
					width={10}
					onPress={handleOpenSelectUfModal}
				/>

				<Select
					value={city}
					isFilled={city === 'Cidade' ? false : true}
					border={false}
					width={70}
					onPress={handleOpenSelectCityModal}
				/>

				<Modal visible={ufModalOpen}>
					<StateSelect
						uf={uf}
						setUf={handleCloseSelectUfModal}
					/>
				</Modal>

				<Modal visible={cityModalOpen}>
					<CitySelect
						city={city}
						uf={uf}
						setCity={handleCloseSelectCityModal}
					/>
				</Modal>

				<Feather
					name="search"
					size={24}
					color={theme.colors.primary}
				/>
			</FilterBar>

			<FlatList
				data={[1, 2, 3]}
				keyExtractor={item => item.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Publication 
						user={{ name: "Eduardo", city: "Arapiraca" }} 
						publication={{ title: "Buraco", likes: "270" }} 
						onPress={handleToView} 
						coordinate={{ latitude: 10, longitude: 10 }} 
						images={[]} />
				)}
			/>

		</Container>
	);
}