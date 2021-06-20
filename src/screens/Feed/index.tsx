import React, { useState, useEffect, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import {
	FlatList,
	Alert,
	Modal
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import {
	Container,
	FilterBar
} from './styles';

import { Publication } from '../../components/Publication';
import { Select } from '../../components/Select';

import { StateSelect } from '../StateSelect';
import { CitySelect } from '../CitySelect';

import { useAuth } from '../../hooks/auth';

interface UserStateCity {
	uf: string;
	city: string;
}

interface DataProps {
	name: string;
	city: string;
	state: string;
	avatar: string;
	id: string;
	title: string;
	totalLike: number;
	like: boolean;
	status: boolean;
	latitude: number;
	longitude: number;
}

export function Feed({ navigation }: any) {

	const theme = useTheme();
	const { user } = useAuth();

	const [data, setData] = useState<DataProps[]>([
		{
			name: "Eduardo",
			city: "São José do Rio Pardo",
			state: "SP",
			avatar: "",
			id: '1',
			title: "Buraco",
			totalLike: 270,
			like: false,
			status: false,
			latitude: -21.5968283,
			longitude: -46.8903086,
		},
		{
			name: "Isabela",
			city: "São José do Rio Pardo",
			state: "SP",
			avatar: "",
			id: '2',
			title: "Buraco",
			totalLike: 100,
			like: false,
			status: false,
			latitude: -21.5968283,
			longitude: -46.8903086,
		},
	]);

	const [userUfCity, setUserUfCity] = useState<UserStateCity>({} as UserStateCity)

	const [uf, setUf] = useState(user.state!);
	const [ufModalOpen, setUfModalOpen] = useState(false);

	const [city, setCity] = useState(user.city!);
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

	function handleUpdateLike(id_post: string, id_user: string, likes: number) {

		let newData = [...data];

		data.map((item, index) => {
			if (item.id === id_post) {
				newData[index].like = !item.like;
				item.like ? newData[index].totalLike += 1 : newData[index].totalLike -= 1;
			}
		});

		setData(newData)
	}

	function handleToView(id_post: string) {
		navigation.navigate('ViewOccurrence', {id_post});
	}

	useFocusEffect(useCallback(() => {
        const parent = navigation.dangerouslyGetParent();
		parent.setOptions({
			tabBarVisible: true
		});
    }, []));

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
				data={data}
				keyExtractor={item => item.id.toString()}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => (
					<Publication
						userPost={{
							name: item.name,
							city: item.city,
							state: item.state,
							avatar: item.avatar
						}}
						publication={{
							id: item.id.toString(),
							title: item.title,
							totalLike: item.totalLike,
							like: item.like,
							status: item.status
						}}
						onPressToView={handleToView}
						onPressLike={handleUpdateLike}
						coordinate={{
							latitude: item.latitude,
							longitude: item.longitude
						}}
					/>
				)}
			/>

		</Container>
	);
}