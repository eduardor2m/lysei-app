import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Description,
  Footer,
  InputMessage,
  Midia
} from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function RegisterOccorrence({ navigation }: any){
  return (
    <Container>
        <Wrapper>
            <Input placeholder="Título"/>
            <InputMessage placeholder="Descrição"/>
            <Input placeholder="Endereço"/>
            <Midia placeholder="Adicionar mídia"/>
        </Wrapper>
        <Footer>
            <Button title="Prosseguir" onPress={() => navigation.navigate('Success')}/>
        </Footer>

    </Container>
  );
}