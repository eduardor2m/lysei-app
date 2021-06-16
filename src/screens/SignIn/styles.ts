import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

`;

export const Header = styled.View`
    width: 100%;
    height: 80%;
    background-color: ${({theme}) => theme.colors.shape};

    align-items: center;
    justify-content: center;

`;

export const TitleWrapper = styled.View`
    align-items: center;
`;
export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_dark};
    font-size: ${RFValue(30)}px;

    text-align: center;

    margin-top: 45px;
`;

export const SignInTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    text-align: center;

    margin-top: 20px;
    margin-bottom: 67px;
`;

export const Image = styled.Image`
    width: 324px;
    height: 209px;

`;

export const Footer = styled.View`
    width: 100%;
    height: 20%;
    background-color: ${({theme}) => theme.colors.primary};

`;

export const FooterWrapper = styled.View`
    margin-top: ${RFPercentage(-4)}px;
    padding: 0 32px;

    justify-content: space-between;
`;