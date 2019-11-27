import React from 'react';
import { View } from 'react-native';

// import { Container } from './styles';

export default function Button({ white }) {
  return (
    <Button onPress={handleLogin} white={white}>
      <ButtonText white={white}><FontAwesomeIcon icon={faGoogle} color="#00B4FF"/> Login com Google</ButtonText>
    </Button>
  );
}
