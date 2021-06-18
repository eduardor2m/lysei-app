import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(36)}px;
    text-align: center;

    margin-top: 54px;
`;

export const Subtitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
    text-align: center;

    margin-top: 10px;
`;

export const Footer = styled.View`
    width: 100%;
    height: 156px;
    background-color: ${({ theme }) => theme.colors.primary};
    bottom: 0;

    align-items: center;
`;


export const FooterWrapper = styled.View`
    margin-top: -25px;
`;