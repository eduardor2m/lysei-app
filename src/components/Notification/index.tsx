import React from 'react';

import avatar from '../../assets/avatar.png'

import {
    Container,
    Photo,
    Info,
    Wrapper,
    UserName
} from './styles';

export function Notification() {
    return (
        <Container>
            <Wrapper>
                <Photo source={ avatar } />
            </Wrapper>
            <Wrapper>
                <Info>
                    O <UserName>Nome do usuário</UserName> curtiu sua publicação.
                </Info>
            </Wrapper>

        </Container>
    );
}