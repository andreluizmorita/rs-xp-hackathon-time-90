import React from 'react';
import { SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import HeaderBar from '../../components/HeaderBar';

import { 
  Container,
  Content,
  Title,
  Description,
  Button,
  ButtonText,
  ButtonIcon,
  Selected,
  SelectedText, 
  List
} from './styles';


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
          <Button onPress={() => navigation.navigate('ListaInteressesModal')}>
            <ButtonText>Escolha as opções</ButtonText>
            <ButtonIcon>
              <FontAwesomeIcon icon={faPlus} color="#89C4F4" />
            </ButtonIcon>
          </Button>

          <List>
            <Selected>
              <SelectedText>Criar histórias</SelectedText> 
              <ButtonIcon><FontAwesomeIcon icon={faPlus} color="#6C6C6C" /></ButtonIcon>
            </Selected>
            <Selected>
              <SelectedText>Ler e escrever</SelectedText> 
              <ButtonIcon><FontAwesomeIcon icon={faPlus} color="#6C6C6C" /></ButtonIcon>
            </Selected>
            <Selected>
              <SelectedText>Pesquisar sobre músicas</SelectedText>
              <ButtonIcon><FontAwesomeIcon icon={faPlus} color="#6C6C6C" /></ButtonIcon>
            </Selected>
          </List>
        </Content>
        
        <Button bottom center blue onPress={() => {}}>
          <ButtonText center blue>Continuar</ButtonText>
        </Button>
      </Container>
      
      
    </SafeAreaView>
  );
}
