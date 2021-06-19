import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.shape};
`;

export const Header = styled.View`
	padding: 34px;
`;

export const Text = styled.Text`
	font-size: ${RFValue(24)}px;
	font-family: ${({ theme }) => theme.fonts.black};
	color: ${({ theme }) => theme.colors.title};
	
	margin-top: 34px;
`;

export const Footer = styled.View`
	padding-left: 31px;
	padding-right: 51px;
`;