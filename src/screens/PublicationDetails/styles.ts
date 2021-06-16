import styled from 'styled-components/native';
import {Feather, AntDesign} from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  margin-left: 10px;
  margin-right: 10px;
`;

export const ListImages = styled.Image`
  width: 100%;
  height: 20%;

  margin-top: 50px;

`;
export const Wrapper = styled.View`
  width: 100%;
  height: 5%;

  flex-direction: row;
  justify-content: space-between;

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
export const Situation = styled.Text`

`;
export const Description = styled.Text` 
  text-align: justify;

`;
export const Locale = styled.Text`
  margin-top: 100px;

`;