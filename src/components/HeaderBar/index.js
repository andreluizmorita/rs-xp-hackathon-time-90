import React from 'react';
import { Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Container, Bar, Background, Percent, Step, BackButton } from './styles';

export default function HeaderBar({ width, step, max, navigation }) {
  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <BackButton onPress={handleBack}>
        <Text><FontAwesomeIcon icon={faArrowLeft} /></Text>
      </BackButton>
      <Bar>
        <Background />
        <Percent width={width} />
      </Bar>
      <Step>{step}/{max}</Step>
    </Container>
  );
}
