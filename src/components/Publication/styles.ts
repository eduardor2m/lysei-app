import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-color: ${({ theme }) => theme.colors.line};

    padding-bottom: 21px;
    margin-bottom: 49px;
`;

export const Header = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
`;

export const User = styled.View`
    width: 80%;

    flex-direction: row;
    align-items: center;
`;

export const Photo = styled.Image`
    width: 51px;
    height: 51px;
    margin-right: 15px;

    border-radius: 26px;
`;

export const WrapperUser = styled.View``;

export const Name = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(18)}px;
`;

export const Address = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
`;

export const ButtonToView = styled(RectButton)`
    width: 51px;
    height: 51px;

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(24)}px;

    margin-top: 19px;
    margin-bottom: 22px;
`;

export const Media = styled.ScrollView.attrs({
    horizontal: true,
    showsHorizontalScrollIndicator: false
})`
    width: 100%;
`;

export const Image = styled.Image`
    width: 280px;
    height: 200px;

    border-radius: 8px;
    
    margin-left: 12px;
`;

export const Options = styled.View`
    margin-top: 23px;

    flex-direction: row;
    justify-content: space-between;
`;

export const Likes = styled(BorderlessButton)`
    flex-direction: row;
    justify-content: center;
`;

export const NumberLikes = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${RFValue(18)}px;

    margin-left: 10px;
`;

export const Share = styled(BorderlessButton)`
    flex-direction: row;
    justify-content: center;
`;

export const LabelShare = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(18)}px;

    margin-right: 10px;
`;