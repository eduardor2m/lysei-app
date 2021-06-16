import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: space-around;
`;

export const Wrapper = styled.View`
    margin-left: 10px;
    margin-right: 10px;

`;

export const InputMessage = styled.TextInput`
    width: 100%;
    height: 40%;
    padding: 16px 18px;

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text_dark};
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.text};

    margin-bottom: 8px;

`;

export const Midia = styled.TextInput`
    width: 100%;
    padding: 16px 18px;

    text-align: center;

    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    color: ${({theme}) => theme.colors.text_dark};
    background-color: ${({theme}) => theme.colors.shape};
    border-radius: 5px;
    border-width: 1px;
    border-style: dashed;
    border-color: ${({theme}) => theme.colors.text};

    margin-bottom: 8px;

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(30)}px;

    text-align: center;

    margin-top: 45px;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    text-align: center;

    margin-top: 20px;
    margin-bottom: 67px;
`;

export const Footer = styled.View`
    margin-left: 10px;
    margin-right: 10px;
`;