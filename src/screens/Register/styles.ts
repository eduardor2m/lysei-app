import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

export const Container = styled.View`
	flex:1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.View`
	padding-top: 45px;
`;

export const Header = styled.View`
	margin-top: 113px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(36)}px;

    text-align: center;
`;

export const Description = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    text-align: center;

    margin-top: 17px;
    margin-bottom: 50px;
`;

export const Form = styled.View`
	padding: 0 55px;
	margin-bottom: 19px;
`;

export const Footer = styled.View`
	margin-top: 19px;
`;