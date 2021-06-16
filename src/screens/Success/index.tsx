import React from 'react';

import {
  Container,
  Title,
  Description,
  Wrapper,
} from './styles';

import ImgSuccess from '../../assets/success.svg'
import { Button } from '../../components/Button';

export function Success({ navigation }: any){
  return (
    <Container>
        <Wrapper>
            <ImgSuccess
                width={100}
                height={100}
            />
            <Title>Sucesso</Title>
            <Description>
                Seu cadastro foi realizado com
                sucesso e já está disponível!
            </Description>
            <Button title="Voltar para o mapa" onPress={() => navigation.navigate('Feed')}/>
        </Wrapper>
    </Container>
  );
}