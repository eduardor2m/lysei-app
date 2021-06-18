import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 20%;

    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: center;

`;
export const Photo = styled.View`
    width: 100px;
    height: 100px;

    border-radius: 50px;

    background-color: ${({theme}) => theme.colors.success};

`;
export const Footer = styled.View`
    width: 100%;
    height: 80%;

    padding-left: 10px;
    padding-right: 10px;

    background-color: ${({theme}) => theme.colors.shape};

`;
export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(30)}px;

    text-align: center;

    margin-top: 45px;

`;

export const Wrapper = styled.View`
    width: 100%;

    margin-top: 45px;
    margin-bottom: 45px;

`;