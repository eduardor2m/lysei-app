import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import {
	Modal,
	Alert,
	StatusBar
} from 'react-native';
import * as Yup from 'yup';

import { Input } from '../../components/Input';
import { Select } from '../../components/Select';

import { StateSelect } from '../StateSelect';
import { CitySelect } from '../CitySelect';

import avatar from '../../assets/avatar.png';
import { MaterialIcons } from '@expo/vector-icons';

import { useAuth } from '../../hooks/auth';

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

export function Perfil({ navigation }: any) {

	const { SignOut, user } = useAuth();
	const theme = useTheme();

	const [uf, setUf] = useState(user.state!);
	const [ufModalOpen, setUfModalOpen] = useState(false);

	const [city, setCity] = useState(user.city!);
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

	async function handleUpdate() {
		try {
			const ufFilled = uf === 'Estado' ? '' : uf;
			const cityFilled = city === 'Cidade' ? '' : city;

			const schema = Yup.object().shape({
				cityFilled: Yup.string()
					.required('A cidade é obrigatória!'),
				ufFilled: Yup.string()
					.required('O estado é obrigatório!'),
			});

			const data = { ufFilled, cityFilled }
			await schema.validate(data);

			navigation.navigate('AppRoutes')

		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Atenção', error.message);
			} else {
				Alert.alert('Não foi possível atualizar seu cadastro');
			}
		}
	}

	return (
		<Container>
			<StatusBar
				barStyle="light-content"
				translucent
				backgroundColor="transparent"
			/>

			<Header>
				<ButtonSignOut onPress={SignOut}>
					<MaterialIcons name="logout" size={24} color={theme.colors.shape} />
				</ButtonSignOut>
			</Header>

			{ !!user.photo ? <Photo source={{ uri: user.photo }} /> : <Photo source={avatar} />}

			<Name>{user.name}</Name>

			<Form>

				<Input
					placeholder="CPF"
					value={user.cpf}
					autoCorrect={false}
					keyboardType="default"
					autoCapitalize="words"
					placeholderTextColor={theme.colors.border}
					editable={false}
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

				<Input
					placeholder="E-mail"
					value={user.email}
					autoCorrect={false}
					keyboardType="default"
					autoCapitalize="words"
					placeholderTextColor={theme.colors.border}
					editable={false}
				/>

				<Button onPress={handleUpdate}>
					<TextButton>Atualizar perfil</TextButton>
				</Button>
			</Form>

		</Container>
	);
}