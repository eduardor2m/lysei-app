import styled from 'styled-components/native';
import {Feather, AntDesign} from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
  height: 40%;
  /* background-color: red; */

  padding: 10px;
  margin-top: 10px;
  border-bottom-width: 0.5px;
  border-bottom-color: ${({theme}) => theme.colors.text};
`;

export const User = styled.View`
    width: 100%;
    height: 30%;

    /* background-color: gray; */

    flex-direction: row;
    align-items: center;

`; 
export const Photo = styled.Image`
    width: 60px;
    height: 60px;
    margin-right: 30px;

    border-radius: 20px;

`;
export const ImageP = styled.Image`


`;
export const WrapperUser = styled.View`

`;
export const Name = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.text_dark};

`;
export const Address = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};

`;
export const Title = styled.Text`
    font-size: 22px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.text_dark};
`;
export const Images = styled.Image`
    width: 100%;
    height: 50%;

    border-radius: 10px;


`;
export const ListImages = styled.FlatList`

`;
export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

`;
export const Likes = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

`;
export const Icon = styled(AntDesign).attrs({
    size: 20,
    color: '#F59138'
})`

`;
export const Number = styled.Text`
    margin-left: 5px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: #F59138;

`;
export const Share = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;

`;
export const TitleShare = styled.Text`
    margin-right: 5px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.text};

`;
export const IconShare = styled(Feather).attrs({
    size: 20,
    color: '#969CB2'
})``;