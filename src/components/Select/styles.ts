import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';

interface PropsContainer{
    border: boolean;
    width: number;
}

interface PropsText{
    isFilled: boolean;
}

export const Container = styled(TouchableOpacity)<PropsContainer>`
    width: ${({ width }) => width}%;
    height: 50px;

    border: 1px solid ${({ theme, border }) => 
        border ? theme.colors.border : theme.colors.shape};

    border-radius: 8px;

    padding: 0 ${({ border }) => 
        border ? 15 : 0}px;

    margin-bottom:  ${({ border }) => 
        border ? 20 : 0}px;

    justify-content: center;
`;

export const Text = styled.Text<PropsText>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(16)}px;

    color: ${({ theme, isFilled }) => 
        isFilled ? theme.colors.text : theme.colors.border
    };
`;