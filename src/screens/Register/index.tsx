import React from 'react';

import {
  Container,
  Wrapper,
  Title,
  Description,
  Footer
} from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register({ navigation }: any){
  return (
    <Container>
        <Wrapper>
            <Title>
              Quase Lá
            </Title>
            <Description>
                Fiscalize obras em decadência {'\n'}
                ou não concluídas e problemas {'\n'}
                que necessitam de atenção
            </Description>
            <Input placeholder="CPF"/>
            <Input placeholder="Cidade"/>
        </Wrapper>
        <Footer>
            <Button title="Prosseguir" onPress={() => navigation.navigate('Feed')}/>
        </Footer>

    </Container>
  );
}