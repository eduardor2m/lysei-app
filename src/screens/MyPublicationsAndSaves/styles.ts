import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 51px;

    flex-direction: row;
    justify-content: center;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const TextMyPublications = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;
`;

export const TextSaves = styled.Text`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;
`;

export const MyPublicationsButton = styled(RectButton)`
    height: ${RFValue(80)}px;
    width: 80%;

    /* background-color: ${({ theme }) => theme.colors.primary}; */

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const MySavesButton = styled(RectButton)`
    height: ${RFValue(80)}px;
    width: 80%;

    /* background-color: ${({ theme }) => theme.colors.primary}; */

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Saves = styled.View`
    width: 40%;
    height: ${RFValue(80)}px;
    
    align-items: center;

    /*border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};*/

    margin-left: 5%;
`;

export const MyPublications = styled.View`
    width: 40%;
    height: ${RFValue(80)}px;

    align-items: center;

    border-bottom-width: 2px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const Footer = styled.View`
    padding-left: 33px;
    padding-right: 33px;
`;