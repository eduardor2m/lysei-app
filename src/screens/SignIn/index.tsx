import React from 'react';

import {
	Container,
	Header,
	Title,
	Subtitle,
	Footer,
	FooterWrapper
} from './styles';

import { SignInSocialButton } from '../../components/SignInSocialButton';

import ConceptSvg from '../../assets/hackathon.svg';
import GoogleSvg from '../../assets/google.svg';
import AppleSvg from '../../assets/apple.svg';

export function SignIn({ navigation }: any) {

	function handleLogin(){
		navigation.navigate('Register')
	}

	return (
		<Container>
			<Header>
				<ConceptSvg />

				<Title>
					Ajude a cuidar{'\n'}
					da sua cidade
				</Title>

				<Subtitle>
					Fiscalize obras em decadência{'\n'}
					ou não concluídas e problemas{'\n'}
					que necessitam de atenção
				</Subtitle>
			</Header>

			<Footer>
				<FooterWrapper>
					<SignInSocialButton
						title="Entrar com o Google"
						icon={GoogleSvg}
						onPress={handleLogin}
					/>
					<SignInSocialButton
						title="Entrar com a Apple"
						icon={AppleSvg}
					/>
				</FooterWrapper>
			</Footer>
		</Container>
	);
}