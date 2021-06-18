import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;

    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: center;
`;

export const SuccessBox = styled.View`
    width: 100px;
    height: 100px;
    border-radius: 30px;

    background-color: ${({theme}) => theme.colors.background}20;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(36)}px;

    text-align: center;

    margin-top: 7px;
    margin-bottom: 17px;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(18)}px;

    text-align: center;
`;

export const Button = styled(RectButton)`
    width: 200px;
    height: 50px;
    border-radius: 30px;

    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.colors.background}20;

    margin-top: 113px;
`;

export const ButtonText = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.background};
    font-size: ${RFValue(16)}px;

    text-align: center;
`;
