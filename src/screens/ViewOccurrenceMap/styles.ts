import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const HeaderButton = styled(RectButton)`
    width: 50px;
    height: 50px;
    border-radius: 25px;

    background-color: ${({ theme }) => theme.colors.shape};

    align-items: center;
    justify-content: center;

    position: absolute;
    z-index: 1;

    margin-top: 43px;
    margin-left: 14px;
`;