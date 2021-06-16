import React from 'react';

import {
  Container,
  Header,
  Footer,
  Image,
  TitleWrapper,
  Title,
  SignInTitle,
  FooterWrapper
} from './styles';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LogoSvg from '../../assets/hackathon.svg';
import GoogleSvg from '../../assets/google.svg';
import { RFValue } from 'react-native-responsive-fontsize';
import { SignInSocialButton } from '../../components/SignInSocialButton';

export function SignIn({ navigation }: any){
  return (
    <Container>
        <Header>
          <TitleWrapper>
            <LogoSvg
                width={RFValue(324)}
                height={RFValue(209)}
            />

            <Title>
              Ajude a cuidar {'\n'}
              da sua cidade 
            </Title>
          </TitleWrapper>
          <SignInTitle>
            Fiscalize obras em decadência {'\n'}
            ou não concluídas e problemas {'\n'}
            que necessitam de atenção
          </SignInTitle>
          



        </Header>

        <Footer>
          <FooterWrapper>
            <SignInSocialButton 
                        title="Entrar com Google"
                        svg={GoogleSvg}
                        onPress={() => navigation.navigate('Register')}
                    />
          </FooterWrapper>

        </Footer>

    </Container>
  );
}