import styled from 'styled-components/native';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    isActived: boolean
}

interface StatusProps{
    status: boolean;
}

interface LikeProps{
    like: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.shape};

    flex-direction: column;
    justify-content: space-between;
`;

export const Content = styled.View`
    padding:33px;
`;

export const Header = styled.View`
    margin-top: 23px;
    margin-bottom: 23px;

    flex-direction: row;
    justify-content: space-between;
`;

export const HeaderButton = styled(RectButton)`
    width: 24px;
    height: 24px;
    border-radius: 12px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.title};
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
    
    margin-right: 12px;
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

export const NumberLikes = styled.Text<LikeProps>`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme, like }) => 
        like ? theme.colors.secondary : theme.colors.text};
    font-size: ${RFValue(18)}px;

    margin-left: 10px;
`;

export const Status = styled.View<StatusProps>`
    width: 80px;
    height: 24px;
    border-radius: 30px;

    border: 1px solid ${({ theme, status }) => 
        status ? theme.colors.success : theme.colors.attention};
    background-color: ${({ theme, status }) => 
        status ? theme.colors.success : theme.colors.attention}40;

    align-items: center;
    margin-right: 1px;
`;

export const TextStatus = styled.Text<StatusProps>`
    color: ${({ theme, status }) => 
        status ? theme.colors.success : theme.colors.attention};
`;

export const Description = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;

    margin-top: 19px;

    text-align: justify;
`;

export const Footer = styled.View`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.colors.background};
    
    border: 1px solid ${({ theme }) => theme.colors.line};

    padding:33px;
`;

export const Address = styled.View`
    width: 100%;
    
    flex-direction: row;
    align-items: flex-start;
`;

export const TextAddress = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
    font-size: ${RFValue(16)}px;
    margin-left: 16px;
`;

export const Button = styled(RectButton)`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.colors.primary};

    flex-direction: row;

    align-items: center;
    justify-content: center;
    border-radius: 30px;

    margin-top: 20px;
`;

export const ButtonText = styled.Text`
    font-family: ${({ theme }) => theme.fonts.black};
    color: ${({ theme }) => theme.colors.background};
    font-size: ${RFValue(16)}px;

    margin-right: 11px;
`;
