import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import {
	Alert,
	Modal,
	KeyboardAvoidingView,
	TouchableWithoutFeedback,
	Keyboard,
	StatusBar
} from 'react-native';
import * as Yup from 'yup';
import * as ImagePicker from 'expo-image-picker';

import {
	Container,
	Content,
	Header,
	Title,
	Form,
	Wrapper,
	Footer,
	InputImage,
	InputImageText,
	UploadedImagesContainer,
	ImageContainer
} from './styles';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Select } from '../../components/Select';

import { StateSelect } from '../StateSelect';
import { CitySelect } from '../CitySelect';

export function RegisterOccurrence({ navigation }: any) {
	const theme = useTheme();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [address, setAddress] = useState('');
	const [images, setImages] = useState<string[]>([]);

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

	async function handleSelectImages() {
		const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

		if (status != 'granted') {
			alert('Eita, precisamos de acesso às suas fotos...');
			return;
		}

		const result = await ImagePicker.launchImageLibraryAsync({
			allowsEditing: true,
			quality: 1,
			mediaTypes: ImagePicker.MediaTypeOptions.Images,
		})

		if (result.cancelled) {
			return;
		}

		const { uri: image } = result;

		setImages([...images, image]);
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
				address: Yup.string()
					.required('O endereço é obrigatório!'),
				description: Yup.string()
					.required('A descrição é obrigatória!'),
				title: Yup.string()
					.required('O título é obrigatório!'),
			});

			const data = { ufFilled, cityFilled, address, description, title }
			await schema.validate(data);

			if (images.length === 0) {
				Alert.alert('Atenção', 'É necessário anexar ao menos uma imagem!')
				return;
			}

			navigation.navigate('Success')

		} catch (error) {
			if (error instanceof Yup.ValidationError) {
				Alert.alert('Atenção', error.message);
			} else {
				Alert.alert('Não foi possível concluir seu cadastro');
			}
		}
	}

	useEffect(() => {
		const parent = navigation.dangerouslyGetParent();
		parent.setOptions({
			tabBarVisible: false
		});
		return () =>
			parent.setOptions({
				tabBarVisible: true
			});
	}, []);

	return (
		<Container>
			<StatusBar
				barStyle="dark-content"
				translucent
				backgroundColor="#FFF"
			/>
			<KeyboardAvoidingView behavior="height" enabled>
				<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
					<Content>
						<Header>
							<Title>
								Cadastrar ocorrência
							</Title>
						</Header>

						<Form>
							<Input
								placeholder="Título"
								value={title}
								onChangeText={setTitle}
								autoCorrect={false}
								keyboardType="default"
								placeholderTextColor={theme.colors.border}
							/>

							<Input
								placeholder="Descrição"
								value={description}
								onChangeText={setDescription}
								autoCorrect={false}
								keyboardType="default"
								multiline
								placeholderTextColor={theme.colors.border}
								style={{ height: 150, textAlignVertical: 'top', paddingTop: 10 }}
							/>

							<Input
								placeholder="Endereço"
								value={address}
								onChangeText={setAddress}
								autoCorrect={false}
								keyboardType="default"
								placeholderTextColor={theme.colors.border}
							/>

							<Wrapper>
								<Select
									value={uf}
									isFilled={uf === 'Estado' ? false : true}
									width={27}
									onPress={handleOpenSelectUfModal}
								/>

								<Select
									value={city}
									isFilled={city === 'Cidade' ? false : true}
									width={70}
									onPress={handleOpenSelectCityModal}
								/>
							</Wrapper>

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

							<InputImage
								activeOpacity={0.5}
								onPress={handleSelectImages}
							>
								<InputImageText>+ Adicionar mídia</InputImageText>
							</InputImage>

							<UploadedImagesContainer>
								{images.map(image => {
									return (
										<ImageContainer
											key={image}
											source={{ uri: image }}
										/>
									)
								})}
							</UploadedImagesContainer>

							<Footer>
								<Button title="Prosseguir" onPress={handleSubmit} />
							</Footer>

						</Form>
					</Content>
				</TouchableWithoutFeedback>
			</KeyboardAvoidingView>
		</Container >
	);
}