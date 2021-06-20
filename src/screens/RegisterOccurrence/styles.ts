import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
	flex:1;
    background-color: ${({ theme }) => theme.colors.shape};
`;

export const Content = styled.ScrollView.attrs({
    showsVerticalScrollIndicator: false
})`
	padding-top: 31px;
`;

export const Header = styled.View`
	margin-top: 31px;
    margin-bottom: 58px;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.black};
    color: ${({theme}) => theme.colors.title};
    font-size: ${RFValue(24)}px;

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
	padding: 0 32px;
	margin-bottom: 19px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const InputImage = styled(TouchableOpacity)`
    width: 100%;
    height: 50px;

    border-radius: 8px;
    border: 1px dashed ${({ theme }) => theme.colors.secondary};
    
    align-items: center;
    justify-content: center;
`;

export const InputImageText = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;
`;

export const UploadedImagesContainer = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    width: 100%;
    margin-top: 20px;
`;

export const ImageContainer = styled.Image`
    width: 80px;
    height: 80px;

    border: 1px solid ${({ theme }) => theme.colors.line};

    border-radius: 8px;
    margin-right: 8px;
`;

export const Footer = styled.View`
	margin-top: 39px;
    padding-bottom:40px
`;