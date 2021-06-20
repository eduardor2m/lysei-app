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
    uf: string;
    setUf: (uf: string) => void;
}

export function StateSelect({
    uf,
    setUf
}: Props) {

    const [ufs, setUfs] = useState<string[]>([]);

    useEffect(() => {
        async function loadStates() {
            const states = await axios.get<string[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
            const ufStates = states.data.map(uf => uf.sigla);
            setUfs(ufStates.sort())
        }
        loadStates()
    }, []);

    function handleUfSelect(item: string) {
        setUf(item);
    }

    return (
        <Container>
            <Title>Estado</Title>

            <FlatList
                data={ufs}
                style={{ flex: 1, width: '100%' }}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Uf
                        onPress={() => handleUfSelect(item)}
                    >
                        <TextUf>{item}</TextUf>
                    </Uf>
                )}
                ItemSeparatorComponent={() => <Separator />}
            />
        </Container>
    );
}