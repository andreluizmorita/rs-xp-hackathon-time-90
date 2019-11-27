import React from 'react';
import { SafeAreaView } from 'react-native';

import { Content, Text, Image, Button, ButtonText } from './styles';

import image from '../../assets/images/boasvindas.png';

export default function BoasVindas() {
  return (
    <SafeAreaView>
      <Content>
        <Image source={image} />
        <Text>
          Parabéns! {'\n'}
          Seja bem-vindo(a) {'\n'}
          à sua jornada.
        </Text>
        <Button onPress={() => {}}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </Content>
    </SafeAreaView>
  );
}
