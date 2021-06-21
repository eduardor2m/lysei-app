import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.colors.shape};

	padding:33px;
	padding-top: 45px;
	padding-bottom: 0px;
`;

export const FilterBar = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	border-bottom-width: 1px;
	border-bottom-color: ${({ theme }) => theme.colors.primary};

	margin-bottom: 50px;
`;

export const Input = styled.TextInput`
	width: 80%;
    height: 50px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.primary};
`;

export const Search = styled(BorderlessButton)``;