import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
    width: 100%;
    height: 50px;

    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 8px;

    padding: 0 15px;
    margin-bottom: 20px;
`;