import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  ListImages,
  Wrapper,
  Likes,
  Situation,
  Description,
  Locale,
  Number,
  Icon
} from './styles';

interface Props {
    id: string,
    url: string
}

import { Button } from '../../components/Button';

export function PublicationDetails(){
  const data: Props[] = [
    {
      id: '1',
      url: 'https://i.pinimg.com/originals/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg'
    },
    {
      id: '2',
      url: 'https://blog.psicologiaviva.com.br/wp-content/uploads/2017/07/mapeamento-do-perfil-de-colaboradores-como-ele-e-um-aliado-das-empresas.jpg'
    }
  ]
  return (
    <Container>
      {/* <ListImages
        data={data}
        keyExtractor={data => data.id}
        renderItem={item => <Image source={{uri: item.url}}/>}
      /> */}
      <ListImages source={{uri: 'https://i.pinimg.com/originals/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg'}}/>
      <Wrapper>
                    <Likes>
                <Icon name="like2"/>
                <Number>115</Number>
            </Likes>
        <Situation>Pedente</Situation>
      </Wrapper>
      <Description>Há tempos que esse buraco está atrapalhando o tráfego na rua, porém, 
        com a temporada de chuvas ele acabou aumentando ainda mais, 
        deixando esse ponto muito perigoso.
      </Description>
      <Locale>Rua 13 de Maio, Centro
        São José do Rio Pardo - SP
      </Locale>
      <Button title="Ver no Mapa"/>

    </Container>
  );
}