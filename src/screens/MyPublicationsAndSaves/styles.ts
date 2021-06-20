import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    isActived: boolean
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: 40px;

    flex-direction: row;
    justify-content: center;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};
`;

export const TextMyPublications = styled.Text<Props>`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.black};

    color: ${({ theme, isActived }) =>
        isActived ? theme.colors.secondary : theme.colors.text};

    font-size: ${RFValue(18)}px;
`;

export const TextSaves = styled.Text<Props>`
    text-align: center;
    font-family: ${({ theme }) => theme.fonts.black};

    color: ${({ theme, isActived }) =>
        isActived ? theme.colors.secondary : theme.colors.text};

    font-size: ${RFValue(18)}px;
`;

export const MyPublicationsButton = styled(RectButton)`
    height: ${RFValue(80)}px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const MySavesButton = styled(RectButton)`
    height: ${RFValue(80)}px;

    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const Saves = styled.View<Props>`
    width: 40%;
    height: ${RFValue(80)}px;
    
    align-items: center;

    margin-left: 5%;

    border-bottom-width: ${({ isActived }) => isActived ? 2 : 0}px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const MyPublications = styled.View<Props>`
    width: 40%;
    height: ${RFValue(80)}px;

    align-items: center;

    border-bottom-width: ${({ isActived }) => isActived ? 2 : 0}px;
    border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const Footer = styled.View`
    padding: 33px;
    margin-bottom: 60px;
`;