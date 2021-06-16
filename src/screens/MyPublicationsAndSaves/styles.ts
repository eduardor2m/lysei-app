import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;
    margin-top: 40px;

    flex-direction: row;

`;
export const Text = styled.Text`
    text-align: center;
    font-family: ${({theme}) => theme.fonts.medium};
    color: #F59138;

`;
export const MyPublicationsButton = styled(RectButton)`
    height: ${RFValue(80)}px;
    width: 45%;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;

    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-bottom: 16px;
    margin-left: 2.5%;
    margin-right: 2.5%;

`;
export const MySavesButton = styled(RectButton)`
    height: ${RFValue(80)}px;
    width: 45%;

    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 5px;

    align-items: center;
    justify-content: center;
    flex-direction: row;

    margin-bottom: 16px;
    margin-left: 2.5%;
    margin-right: 2.5%;

`;