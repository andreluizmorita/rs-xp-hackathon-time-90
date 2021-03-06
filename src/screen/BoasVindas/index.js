import React from 'react';
import { SafeAreaView } from 'react-native';

import { Content, Text, Image, Button, ButtonText } from './styles';

import image from '../../assets/images/boasvindas.png';

export default function BoasVindas({ navigation }) {
  return (
    <SafeAreaView>
      <Content>
        <Image source={image} />
        <Text>
          Parabéns! {'\n'}
          Seja bem-vindo(a) {'\n'}
          à sua jornada.
        </Text>
        <Button onPress={() => navigation.navigate('OqueGostaScreen')}>
          <ButtonText>Continuar</ButtonText>
        </Button>
      </Content>
    </SafeAreaView>
  );
}
