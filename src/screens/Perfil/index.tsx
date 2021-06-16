import React from 'react';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import {
  Container,
  Header,
  Photo,
  Footer,
  Name,
  Wrapper,
} from './styles';

export function Perfil({ navigation }: any){
  return (
    <Container>
        <Header>
            <Photo/>

        </Header>
        <Footer>
            <Name>Eduardo Melo</Name>

            <Wrapper>
                <Input placeholder="123.456.789-10"/>
                <Input placeholder="São José do Rio Pardo - SP"/>
                <Input placeholder="usuario@email.com"/>
            </Wrapper>

            <Button title="Atualizar Perfil" onPress={() => navigation.navigate('Feed')}/>

        </Footer>

    </Container>
  );
}