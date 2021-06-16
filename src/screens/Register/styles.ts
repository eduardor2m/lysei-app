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