import React from 'react';
import { Alert } from 'react-native';

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

import { useAuth } from '../../hooks/auth';


export function SignIn({ navigation }: any) {

	const { SignInWithGoogle } = useAuth();

	async function handleSignInWithGoogle() {
		try {
			return await SignInWithGoogle()
		} catch (error) {
			console.log(error);
			Alert.alert('Não foi possivel conectar a conta Google');
		}
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
						onPress={handleSignInWithGoogle}
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