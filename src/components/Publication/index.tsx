import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import MapView, {
    Marker,
    PROVIDER_GOOGLE
} from 'react-native-maps';

import point from '../../assets/point.png'
import avatar from '../../assets/avatar.png'

import {
    Container,
    Header,
    User,
    Photo,
    WrapperUser,
    Name,
    Address,
    ButtonToView,
    Title,
    Media,
    Image,
    Options,
    Likes,
    NumberLikes,
    Share,
    LabelShare
} from './styles';

interface PropsImage{
    id: string;
    url: string;
}

interface PropsCoordinate{
    latitude: number,
    longitude: number
}

interface PropsUser {
    name: string;
    city: string;

}

interface PropsPublication {
    title: string,
    likes: string
}

interface Props{
    coordinate: PropsCoordinate,
    images: PropsImage[],
    user: PropsUser,
    publication: PropsPublication,
    onPress(): void
}

export function Publication({
    coordinate,
    images,
    user,
    publication,
    onPress
}:Props) {

    const theme = useTheme();

    const UrlImg: PropsImage[] = [
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
            <Header>
                <User>
                    <Photo source={avatar} />

                    <WrapperUser>
                        <Name>{user.name}</Name>
                        <Address>{user.city}</Address>
                    </WrapperUser>
                </User>
                <ButtonToView>
                    <Feather
                        name="arrow-right"
                        size={24}
                        color={theme.colors.secondary}
                    />
                </ButtonToView>
            </Header>

            <Title>{publication.title}</Title>

            <Media>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1, width: 280, height: 200, borderRadius: 8 }}
                    region={{
                        latitude: -14.1333023,
                        longitude: -59.9988083,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    scrollEnabled={false}
                >

                    <Marker
                        icon={point}
                        coordinate={{ latitude: -14.1333023, longitude: -59.9988083 }}
                    />

                </MapView>

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
                        {publication.likes}
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