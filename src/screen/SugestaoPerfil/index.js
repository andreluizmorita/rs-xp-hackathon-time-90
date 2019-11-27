import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import ScreenWithScrollView from '../../components/ScreenWithScrollView';

import { 
  Container, 
  Image, 
  Subtitle,
  Title,
  Description,
  TitleMore,
  TitleMoreText,
  DescriptionMore,
  ButtonMore,
  Text,
  Button,
  ButtonText,
  TitleCompany,
  FlexRow,
  Applications,
  Application,
} from './styles';

import like from '../../assets/images/like.png';
import netflix from '../../assets/images/netflix.png';
import globoplay from '../../assets/images/globoplay.png';
import telecine from '../../assets/images/telecine.png';

export default function SugestaoPerfil({ navigation }) {
  return (
    <Container>
      <ScreenWithScrollView>
        <Image source={like} />
        <Subtitle>Seu perfil é</Subtitle>
        <Title>Front-end</Title>
        <Description>
          O desenvolvedor front end é o profissional responsável por projetar, 
          construir e otimizar as interfaces (visual) de um projeto. 
          Qual a importância desse cargo?
        </Description>
        <TitleMore>
          <TitleMoreText>Qual a importância desse cargo?</TitleMoreText>
          <ButtonMore>
            <FontAwesomeIcon icon={faChevronDown} color="#00B4FF" />
          </ButtonMore>
        </TitleMore>
        {/* <DescriptionMore>
          - 80% do tempo de carregamento é gasto no frontend;{'\n \n'}
          - Cada vez mais as interfaces vem ficando complexas e detalhadas, fazendo ainda mais necessária a presença de um especialista;{'\n \n'}
          - O visual é a primeira coisa a ser vista, se ele estiver quebrado, o risco do usuário sair e nunca mais voltar é maior.
        </DescriptionMore>
        */}
        <Text>
          Quer saber mais sobre essa profissão? O Willian Justen fala mais sobre o cargo e sobre o mercado.
        </Text>
        <Button onPress={() => {}}>
          <ButtonText>Clique aqui para ler</ButtonText>
        </Button>
        <TitleCompany>Empresas e suas tecnologias</TitleCompany>
        <FlexRow>
          <Application onPress={() => navigation.navigate('InicioScreen')}>
            <Image source={netflix} />
          </Application>
          <Application onPress={() => navigation.navigate('InicioScreen')}>
            <Image source={globoplay} />
          </Application>
          <Application onPress={() => navigation.navigate('InicioScreen')}>
            <Image source={telecine} />
          </Application>
        </FlexRow>
        <Subtitle style={{ marginTop: 20 }}>
          Agora que sabemos o caminho que se {'\n'}
          encaixa melhor com você.
        </Subtitle>

        <Button blue>
          <ButtonText blue>Vamos começar a sua jornada!</ButtonText>
        </Button>
      </ScreenWithScrollView> 
    </Container>
  );
}
