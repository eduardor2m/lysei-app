import React, { useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { Publication } from '../../components/Publication';

import {
	Container,
	Header,
	MyPublicationsButton,
	MySavesButton,
	MyPublications,
	Saves,
	TextMyPublications,
	TextSaves,
	Footer
} from './styles';

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

export function MyPublicationsAndSaves({navigation}: any) {

	const [activeTabPost, setActiveTabPost] = useState(true);
	const [activeTabFavorite, setActiveTabFavorite] = useState(false);

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

	function handleTabPost(){
		setActiveTabPost(true);
		setActiveTabFavorite(false);
	}

	function handleTabFavorite(){
		setActiveTabPost(false);
		setActiveTabFavorite(true);
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
			<Header>
				<MyPublications isActived={activeTabPost}>
					<MyPublicationsButton onPress={handleTabPost}>
						<TextMyPublications isActived={activeTabPost}>Minhas {'\n'} Publicações</TextMyPublications>
					</MyPublicationsButton>
				</MyPublications>
				<Saves isActived={activeTabFavorite}>
					<MySavesButton onPress={handleTabFavorite}>
						<TextSaves isActived={activeTabFavorite}>Minhas {'\n'} Favoritas</TextSaves>
					</MySavesButton>
				</Saves>
			</Header>
			<Footer>
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
			</Footer>

		</Container>
	);
}