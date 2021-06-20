import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
    Container,
    Text
} from './styles';

interface Props{
    value: string;
    isFilled: boolean;
    border?: boolean;
    width?: number;
    onPress: () => void;
}

export function Select({value, isFilled, border = true, width = 100, onPress}: Props){
    return(
        <Container border={border} width={width} onPress={onPress} activeOpacity={.8}>
            <Text isFilled={isFilled}>{value}</Text>
        </Container>
    )
}