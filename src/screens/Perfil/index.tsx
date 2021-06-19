import React from 'react';
import { useTheme } from 'styled-components';

import { Input } from '../../components/Input';

import avatar from '../../assets/avatar.png'
import {MaterialIcons} from '@expo/vector-icons'

import {
	Container,
	Header,
	Photo,
	Name,
	Form,
	Button,
	TextButton,
	ButtonSignOut
} from './styles';
import { useAuth } from '../../hooks/auth';


export function Perfil({ navigation }: any) {

	const {SignOut, user} = useAuth();
	const theme = useTheme();

	return (
		<Container>
			<Header>
				<ButtonSignOut onPress={SignOut}>
					<MaterialIcons name="logout" size={24} color={theme.colors.shape}/>
				</ButtonSignOut>
			</Header>

			<Photo source={avatar} />

			<Name>{user.name}</Name>

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