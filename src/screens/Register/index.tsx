import React, { useState } from 'react';
import {
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	Modal,
	Alert
} from 'react-native';
import { useTheme } from 'styled-components';
import * as Yup from 'yup';

import {
	Container,
	Content,
	Header,
	Title,
	Description,
	Form,
	Footer
} from './styles';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';

import { StateSelect } from '../StateSelect';
import { CitySelect } from '../CitySelect';
import { UserRegisterRoutes } from '../../routes/userRegister.routes';

export function Register({ navigation }: any) {
	const theme = useTheme();

	const { userCompleteRegister } = useAuth();

	const [cpf, setCpf] = useState('');

	const [uf, setUf] = useState('Estado');
	const [ufModalOpen, setUfModalOpen] = useState(false);

	const [city, setCity] = useState('Cidade');
	const [cityModalOpen, setCityModalOpen] = useState(false);

	function handleOpenSelectUfModal() {
		setUfModalOpen(true);
	}

	function handleCloseSelectUfModal(item: string) {
		setCity('Cidade');
		setUf(item);
		setUfModalOpen(false);
	}

	function handleOpenSelectCityModal() {
		if (uf === 'Estado') {
			Alert.alert('Atenção', 'Selecione o estado primeiro!');
		} else {
			setCityModalOpen(true);
		}
	}

	function handleCloseSelectCityModal(item: string) {
		setCity(item)
		setCityModalOpen(false);
	}

	async function handleSubmit() {
		try {
			const ufFilled = uf === 'Estado' ? '' : uf;
			const cityFilled = city === 'Cidade' ? '' : city;

			const schema = Yup.object().shape({
				cityFilled: Yup.string()
					.required('A cidade é obrigatória!'),
				ufFilled: Yup.string()
					.required('O estado é obrigatório!'),
				cpf: Yup.string()
					.required('O CPF é obrigatório!')
			});

			const data = { cpf, ufFilled, cityFilled }
			await schema.validate(data);

			userCompleteRegister(cpf, city, uf);

		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Atenção', error.message);
			} else {
				Alert.alert('Não foi possível concluir seu cadastro');
			}
		}
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
								value={cpf}
								onChangeText={setCpf}
								autoCorrect={false}
								keyboardType="numeric"
								placeholderTextColor={theme.colors.border}
							/>

							<Select
								value={uf}
								isFilled={uf === 'Estado' ? false : true}
								onPress={handleOpenSelectUfModal}
							/>

							<Select
								value={city}
								isFilled={city === 'Cidade' ? false : true}
								onPress={handleOpenSelectCityModal}
							/>

							<Modal visible={ufModalOpen}>
								<StateSelect
									uf={uf}
									setUf={handleCloseSelectUfModal}
								/>
							</Modal>

							<Modal visible={cityModalOpen}>
								<CitySelect
									city={city}
									uf={uf}
									setCity={handleCloseSelectCityModal}
								/>
							</Modal>

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