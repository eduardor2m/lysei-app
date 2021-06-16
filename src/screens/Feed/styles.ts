import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 40px;
`;

export const Input = styled.TextInput`
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.primary};
  padding: 16px 18px;

`;