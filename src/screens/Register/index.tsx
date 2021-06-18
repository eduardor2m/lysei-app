import React from 'react';
import {
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	View
} from 'react-native';
import { useTheme } from 'styled-components';

import {
	Container,
	Content,
	Header,
	Title,
	Description,
	Form,
	Footer
} from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Register({ navigation }: any) {
	const theme = useTheme();

	function handleSubmit() {
		navigation.navigate('AppRoutes')
	}

	return (
		<Container>
			<KeyboardAvoidingView behavior="position" enabled>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Content>
						<Header>
							<Title>
								Quase lá
							</Title>

							<Description>
								Preencha as informações a{'\n'}
								seguir para completar o seu{'\n'}
								cadastro e prosseguir
							</Description>
						</Header>

						<Form>
							<Input
								placeholder="CPF"
								autoCorrect={false}
								keyboardType="numeric"
								placeholderTextColor={theme.colors.border}
							/>

							<Input
								placeholder="Estado"
								autoCorrect={false}
								keyboardType="default"
								autoCapitalize="words"
								placeholderTextColor={theme.colors.border}
							/>

							<Input
								placeholder="Cidade"
								autoCorrect={false}
								keyboardType="default"
								autoCapitalize="words"
								placeholderTextColor={theme.colors.border}
							/>

							<Footer>
								<Button title="Prosseguir" onPress={handleSubmit} />
							</Footer>

						</Form>
					</Content>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</Container>
	);
}