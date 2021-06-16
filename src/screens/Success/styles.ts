import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: center;
    padding-left: 10px;
    padding-right: 10px;
`;

export const Wrapper = styled.View`
    align-items: center;
    justify-content: center;

`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(30)}px;

    text-align: center;

    margin-top: 45px;

`;
export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    text-align: center;

    margin-top: 20px;
    margin-bottom: 67px;

`;
