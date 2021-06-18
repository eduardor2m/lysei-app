import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import {
    Container,
    User,
    Photo,
    WrapperUser,
    Name,
    Address,
    Title,
    Media,
    Map,
    Image,
    Options,
    Likes,
    NumberLikes,
    Share,
    LabelShare
} from './styles';

interface Props {
    id: string;
    url: string;
}

export function Publication() {

    const theme = useTheme();

    const UrlImg: Props[] = [
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
                <Photo source={{ uri: "https://i.pinimg.com/originals/5a/72/e1/5a72e1f05f9e2e1b76a8438a7490dc3b.jpg" }} />

                <WrapperUser>
                    <Name>Eduardo Melo</Name>
                    <Address>Campinas - SP</Address>
                </WrapperUser>
            </User>

            <Title>Buraco</Title>

            <Media>
                <Map />

                <Image
                    source={{ uri: 'https://www.noviello.adv.br/wp-content/uploads/2019/06/buracos-nas-vias-wp.jpg' }}
                    resizeMode="cover"
                />

                <Image
                    source={{ uri: 'https://www.noviello.adv.br/wp-content/uploads/2019/06/buracos-nas-vias-wp.jpg' }}
                    resizeMode="cover"
                />
            </Media>

            <Options>
                <Likes>
                    <Feather
                        name="thumbs-up"
                        size={24}
                        color={theme.colors.secondary}
                    />
                    <NumberLikes>
                        270
                    </NumberLikes>
                </Likes>

                <Share>
                    <LabelShare>
                        Compartilhar
                    </LabelShare>
                    <Feather
                        name="share-2"
                        size={24}
                        color={theme.colors.text}
                    />
                </Share>
            </Options>

        </Container>
    );
}