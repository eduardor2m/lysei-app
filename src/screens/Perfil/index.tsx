import React from 'react';
import { useTheme } from 'styled-components';

import { Input } from '../../components/Input';

import avatar from '../../assets/avatar.png'

import {
	Container,
	Header,
	Photo,
	Name,
	Form,
	Button,
	TextButton
} from './styles';

export function Perfil({ navigation }: any) {
	const theme = useTheme();

	return (
		<Container>
			<Header />

			<Photo source={avatar} />

			<Name>Eduardo Melo</Name>

			<Form>

				<Input
					placeholder="CPF"
					value="123.456.789-10"
					autoCorrect={false}
					keyboardType="default"
					autoCapitalize="words"
					placeholderTextColor={theme.colors.border}
					editable={false}
				/>

				<Input 
					placeholder="Cidade"
					value="São José do Rio Pardo - SP" 
					autoCorrect={false}
					keyboardType="default"
					autoCapitalize="words"
					placeholderTextColor={theme.colors.border}
				/>

				<Input 
					placeholder="E-mail"
					value="usuario@email.com" 
					autoCorrect={false}
					keyboardType="default"
					autoCapitalize="words"
					placeholderTextColor={theme.colors.border}
					editable={false}
				/>

				<Button>
					<TextButton>Atualizar perfil</TextButton>
				</Button>
			</Form>

		</Container>
	);
}