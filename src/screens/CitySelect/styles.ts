import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(24)}px;

    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const Uf = styled.TouchableOpacity`
    width: 100%;
    padding: 8px 30px;
`;

export const TextUf = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.text};
`;

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.line};
`;
