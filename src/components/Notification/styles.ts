import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex: 1;
	flex-direction: row;

	margin-bottom: 26px;
`;

export const Photo = styled.Image`
    width: 50px;
    height: 50px;

    border-radius: 25px;
`;

export const Info = styled.Text`
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;
`;

export const UserName = styled.Text`
    color: ${({ theme }) => theme.colors.title};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(16)}px;
`;

export const Wrapper = styled.View``;