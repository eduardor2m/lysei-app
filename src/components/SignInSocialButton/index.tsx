import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Text
} from './styles';

interface Props extends RectButtonProps{
    title: string;
    icon: React.FC<SvgProps>
}

export function SignInSocialButton({
    title,
    icon: Icon,
    ...rest
} : Props){
    return(
        <Container {...rest}>
            <Icon 
                width={30} 
                height={30}
            />
            <Text>
                {title}
            </Text>
        </Container>
    )
}