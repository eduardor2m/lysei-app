import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;
    border-radius: 30px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(18)}px;
`;