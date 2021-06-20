import React, { useState, useEffect, useCallback } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useFocusEffect } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth';

import {
	Container,
	Content,
	Header,
	HeaderButton,
	Title,
	Media,
	Image,
	Options,
	Likes,
	NumberLikes,
	Status,
	TextStatus,
	Description,
	Footer,
	Address,
	TextAddress,
	Button,
	ButtonText
} from './styles';

interface DataProps {
	name: string;
	city: string;
	state: string;
	avatar: string
	id: string;
	title: string;
	totalLike: number;
	like: boolean;
	favorite: boolean;
	status: boolean;
	latitude: number;
	longitude: number;
	address: string;
	description: string;
}

export function ViewOccurrence({ navigation }: any) {

	const theme = useTheme();
	const { user } = useAuth();

	const [data, setData] = useState<DataProps>(
		{
			name: "Eduardo",
			city: "São José do Rio Pardo",
			state: "SP",
			avatar: "",
			id: '1',
			title: "Buraco",
			totalLike: 270,
			like: false,
			favorite: false,
			status: false,
			latitude: -21.5968283,
			longitude: -46.8903086,
			address: 'Rua 13 de Maio, Centro',
			description: 'Há tempos que esse buraco está atrapalhando o tráfego na rua, porém, com a temporada de chuvas ele acabou aumentando ainda mais, deixando esse ponto muito perigoso.'
		}
	);

	function handleUpdateLike() {

		let newData = { ...data };

		newData.like = !data.like;
		data.like ? newData.totalLike -= 1 : newData.totalLike += 1;

		setData(newData)
	}

	function handleUpdateFavorite() {

		let newData = { ...data };

		newData.favorite = !data.favorite;

		setData(newData)
	}

	function handleToViewMap() {
		navigation.navigate('ViewOccurrenceMap', { latitude: data.latitude, longitude: data.longitude })
	}

	useFocusEffect(useCallback(() => {
		const parent = navigation.dangerouslyGetParent();
		parent.setOptions({
			tabBarVisible: false
		});
	}, []));

	return (
		<Container>
			<Content>
				<Header>
					<HeaderButton
						onPress={() => navigation.goBack()}
					>
						<Feather
							name="chevron-left"
							size={24}
							color={theme.colors.secondary}
						/>
					</HeaderButton>

					<Title>{data.title}</Title>

					<HeaderButton
						onPress={handleUpdateFavorite}
					>
						<Feather
							name="star"
							size={24}
							color={data.favorite ? theme.colors.secondary : theme.colors.text}
						/>
					</HeaderButton>
				</Header>
				<Media>
					<Image
						source={{ uri: 'https://www.noviello.adv.br/wp-content/uploads/2019/06/buracos-nas-vias-wp.jpg' }}
						resizeMode="cover"
					/>

					<Image
						source={{ uri: 'https://www.noviello.adv.br/wp-content/uploads/2019/06/buracos-nas-vias-wp.jpg' }}
						resizeMode="cover"
					/>
				</Media>

				<Options>
					<Likes onPress={() => handleUpdateLike()}>
						<Feather
							name="thumbs-up"
							size={24}
							color={data.like ? theme.colors.secondary : theme.colors.text}
						/>
						<NumberLikes like={data.like}>
							{data.totalLike}
						</NumberLikes>
					</Likes>

					<Status status={data.status}>
						<TextStatus status={data.status}>
							{data.status ? "Concluído" : "Pendente"}
						</TextStatus>
					</Status>
				</Options>

				<Description>
					{data.description}
				</Description>
			</Content>

			<Footer>
				<Address>
					<Feather name="map-pin" size={24} color={theme.colors.text} />
					<TextAddress>
						{data.address}{'\n'}
						{data.city} - {data.state}
					</TextAddress>
				</Address>
				<Button onPress={handleToViewMap}>
					<ButtonText>Ver no mapa</ButtonText>
					<Feather name="map" size={24} color={theme.colors.background} />
				</Button>
			</Footer>
		</Container>
	);
}