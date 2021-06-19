import React from 'react';

import avatar from '../../assets/avatar.png'

import {
    Container,
    Photo,
    Info,
    Wrapper,
    UserName
} from './styles';

interface Props {
    user: string
}

export function Notification({user}: Props) {
    return (
        <Container>
            <Wrapper>
                <Photo source={ avatar } />
            </Wrapper>
            <Wrapper>
                <Info>
                    O <UserName>{user}</UserName> curtiu sua publicação.
                </Info>
            </Wrapper>

        </Container>
    );
}