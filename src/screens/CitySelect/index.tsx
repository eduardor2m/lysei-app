import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import axios from 'axios';

import {
    Container,
    Title,
    Uf,
    TextUf,
    Separator
} from './styles';

interface Props {
    city: string;
    uf: string;
    setCity: (city: string) => void;
}

export function CitySelect({
    city,
    uf,
    setCity
}: Props) {

    const [cities, setCities] = useState<string[]>([]);

    useEffect(() => {
        async function loadCities() {
            const city = await axios.get<string[]>(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
            const cityName = city.data.map(city => city.nome);
            setCities(cityName.sort())
        }
        loadCities()
    }, []);

    function handleCitySelect(item: string) {
        setCity(item);
    }

    return (
        <Container>
            <Title>Cidades</Title>

            <FlatList
                data={cities}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Uf
                        onPress={() => handleCitySelect(item)}
                    >
                        <TextUf>{item}</TextUf>
                    </Uf>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </Container>
    );
}