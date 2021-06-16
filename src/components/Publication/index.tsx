import React from 'react';

import {
  Container,
  User,
  Photo,
  WrapperUser,
  Name,
  Address,
  Title,
  Images,
  ListImages,
  Wrapper,
  Likes,
  Icon,
  Number,
  Share,
  TitleShare,
  IconShare,
  ImageP
} from './styles';

interface Props {
    id: string;
    url: string;
}

export function Publication(){

    const UrlImg: Props[]  = [
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
        <User>
            <Photo source={{uri:"https://i.pinimg.com/originals/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg"}}/>
            <WrapperUser>
                <Name>Eduardo Melo</Name>
                <Address>Campinas - SP</Address>
            </WrapperUser>
        </User>
        <Title>Buraco</Title>
        <Images source={{uri: 'https://www.noviello.adv.br/wp-content/uploads/2019/06/buracos-nas-vias-wp.jpg'}}>
            {/* <ListImages
                data={UrlImg}
                keyExtractor={( Props => item.id}
                renderItem={({item}) => (
                    <ImageP source={{uri: item.url}}/>
                )}
            /> */}
        </Images>
        <Wrapper>
            <Likes>
                <Icon name="like2"/>
                <Number>115</Number>
            </Likes>
            <Share>
                <TitleShare>Compartilhar</TitleShare>
                <IconShare name="share-2"/>
            </Share>
        </Wrapper>

    </Container>
  );
}