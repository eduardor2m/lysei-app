import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background: ${({ theme }) => theme.colors.shape};
    align-items: center;
`;

export const Header = styled.View`
    width: 100%;
    height: 200px;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: center;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 169px;
    height: 169px;

    margin-top: -100px;
`;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(24)}px;

    text-align: center;
    
    margin-top: 24px;
`;

export const Form = styled.View`
    width: 100%;
    padding: 33px;
`;

export const Button = styled(RectButton)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.secondary};

    align-items: center;
    justify-content: center;
    border-radius: 30px;

    margin-top: 19px;
`;

export const TextButton = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(18)}px;
`;