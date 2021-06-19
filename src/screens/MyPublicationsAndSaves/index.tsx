import React from 'react';
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

export function MyPublicationsAndSaves() {
	return (
		<Container>
			<Header>
				<MyPublications>
					<MyPublicationsButton onPress={() => { }}>
						<TextMyPublications>Minhas {'\n'} Publicações</TextMyPublications>

					</MyPublicationsButton>
				</MyPublications>
				<Saves>
					<MySavesButton onPress={() => { }}>
						<TextSaves>Minhas {'\n'} Favoritas</TextSaves>
					</MySavesButton>
				</Saves>
			</Header>
			<Footer>
				<Publication user={{name:"Eduardo", city:"Arapiraca"}} publication={{title: "Buraco", likes: "270"}} onPress={() => {}} coordinate={{latitude: 10, longitude: 10}} images={[]}/>
			</Footer>

		</Container>
	);
}