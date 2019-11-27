import React from 'react';
import { SafeAreaView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

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

export default function OqueFaz({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <HeaderBar width={100} step={1} max={3} navigation={navigation} />
        <Content>
          <Title>
            O que você gosta{'\nb'}
            de fazer no dia-a-dia?  
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
              <SelectedText>Gravar vídeos para internet</SelectedText> 
              <ButtonIcon><FontAwesomeIcon icon={faTrashAlt} color="#6C6C6C" /></ButtonIcon>
            </Selected>
            <Selected>
              <SelectedText>Tocar um instrumento musical</SelectedText> 
              <ButtonIcon><FontAwesomeIcon icon={faTrashAlt} color="#6C6C6C" /></ButtonIcon>
            </Selected>
          </List>
        </Content>
        
        <Button bottom center blue onPress={() => navigation.navigate('SugestaoPerfilScreen')}>
          <ButtonText center blue>Continuar</ButtonText>
        </Button>
      </Container>
      
      
    </SafeAreaView>
  );
}
