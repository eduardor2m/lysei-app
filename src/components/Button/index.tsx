import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Text
} from './styles';

interface Props extends RectButtonProps{
    title: string;
}

export function Button({
    title,
    enabled = true,
    ...rest
} : Props){
    return(
        <Container 
            enabled={enabled}
            style={{ opacity: enabled ? 1 : .5 }}
            {...rest}
        >
            <Text>
                {title}
            </Text>
        </Container>
    )
}