import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    width: 300px;
    height: 56px;
    border-radius: 30px;

    background-color: ${({ theme }) => theme.colors.line};

    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-bottom:10px;
`;

export const Text = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(14)}px;

    margin-left: 20px;
`;