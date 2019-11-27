import React from 'react';
import { SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import HeaderBar from '../../components/HeaderBar';

import { Container, Content, Title, Description, Button, ButtonText, ButtonIcon } from './styles';


export default function Interesses({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <HeaderBar width={66.7} step={1} max={3} navigation={navigation} />
        <Content>
          <Title>
            Principais{'\n'}
            Interesses
          </Title>
          <Description>Escolha até quatro opções.</Description>
          <Button>
            <ButtonText>Escolha as opções</ButtonText>
            <ButtonIcon>
              <FontAwesomeIcon icon={faPlus} color="#89C4F4" />
            </ButtonIcon>
          </Button>
        </Content>

      </Container>
      
      
    </SafeAreaView>
  );
}
