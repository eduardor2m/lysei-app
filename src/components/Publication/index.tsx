import React from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import MapView, {
    Marker,
    PROVIDER_GOOGLE
} from 'react-native-maps';

import { useAuth } from '../../hooks/auth';

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
    LabelShare,
    Status,
    TextStatus
} from './styles';

interface PropsCoordinate {
    latitude: number,
    longitude: number
}

interface PropsUser {
    name: string;
    city: string;
    state: string;
    avatar: string
}

interface PropsPublication {
    id: string;
    title: string,
    status: boolean;
    totalLike: number;
    like: boolean;
}

interface Props {
    coordinate: PropsCoordinate,
    userPost: PropsUser,
    publication: PropsPublication,
    onPressToView: (id_post: string) => void,
    onPressLike: (id_post: string, id_user: string, likes: number) => void,
}

export function Publication({
    coordinate,
    userPost,
    publication,
    onPressToView,
    onPressLike
}: Props) {

    const theme = useTheme();
    const { user } = useAuth();

    return (
        <Container>
            <ButtonToView onPress={() => onPressToView(publication.id)} activeOpacity={0.8}>
                <Header>
                    <User>
                        {userPost.avatar != "" ? <Photo source={{ uri: userPost.avatar }} /> : <Photo source={avatar} />}

                        <WrapperUser>
                            <Name>{userPost.name}</Name>
                            <Address>{userPost.city} - {userPost.state}</Address>
                        </WrapperUser>
                    </User>
                </Header>

                <Title>{publication.title}</Title>

                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={{ flex: 1, width: '100%', height: 200, borderRadius: 8 }}
                    region={{
                        latitude: coordinate.latitude,
                        longitude: coordinate.longitude,
                        latitudeDelta: 0.008,
                        longitudeDelta: 0.008,
                    }}
                    scrollEnabled={false}
                >

                    <Marker
                        icon={point}
                        coordinate={{ latitude: coordinate.latitude, longitude: coordinate.longitude }}
                    />

                </MapView>
            </ButtonToView>

            <Options>
                <Likes onPress={() => onPressLike(publication.id, user.id, publication.totalLike)}>
                    <Feather
                        name="thumbs-up"
                        size={24}
                        color={publication.like ? theme.colors.secondary : theme.colors.text}
                    />
                    <NumberLikes like={publication.like}>
                        {publication.totalLike}
                    </NumberLikes>
                </Likes>

                <Status status={publication.status}>
                    <TextStatus status={publication.status}>
                        {publication.status ? "Concluído" : "Pendente"}
                    </TextStatus>
                </Status>
            </Options>

        </Container>
    );
}