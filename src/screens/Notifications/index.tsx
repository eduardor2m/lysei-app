import React from 'react';
import { Notification } from '../../components/Notification';
import { FlatList } from 'react-native';

import {
	Container,
	Text,
	Header,
	Footer
} from './styles';

export function Notifications() {
	return (
		<Container>
			<Header>
				<Text>Notificações</Text>
			</Header>
			<Footer>
				<FlatList
					data={[1, 2, 3, 4, 5]}
					keyExtractor={item => item.toString()}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<Notification user="Eduardo Melo"/>
					)}
				/>
			</Footer>
		</Container>
	);
}