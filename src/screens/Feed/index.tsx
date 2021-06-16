import React from 'react';

import {
  Container,
  Input
} from './styles';

import { Publication } from '../../components/Publication';
import { Button } from '../../components/Button';

export function Feed({ navigation }: any){
  return (
    <Container>
      <Input placeholder="Sua cidade"/>
      <Publication/>
      <Button title="Prosseguir" onPress={() => navigation.navigate('RegisterOccorrence')}/>


    </Container>
  );
}