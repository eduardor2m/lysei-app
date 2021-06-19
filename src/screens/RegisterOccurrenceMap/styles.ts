import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const LoadContent = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Button = styled(RectButton)`
    width: 85%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.secondary};

    align-items: center;
    justify-content: center;
    border-radius: 30px;

    margin-bottom: 45px;
    position: absolute;
    bottom: 0;
    align-self: center;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(18)}px;
`;