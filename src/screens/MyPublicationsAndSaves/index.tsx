import React from 'react';

import {
  Container,
  Header,
  MyPublicationsButton,
  MySavesButton,
  Text
} from './styles';

export function MyPublicationsAndSaves(){
  return (
    <Container>
        <Header>
            <MyPublicationsButton onPress={() => {}}>
                <Text>Minhas {'\n'} Publicações</Text>

            </MyPublicationsButton>
            <MySavesButton onPress={() => {}}>
                <Text>Minhas {'\n'} Favoritas</Text>
            </MySavesButton>
        </Header>

    </Container>
  );
}