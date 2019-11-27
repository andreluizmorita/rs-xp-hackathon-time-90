import React from 'react';
import { SafeAreaView } from 'react-native';

import HeaderBar from '../../components/HeaderBar';

import { Container, Content, Title, Description, Options, Option, OptionText, OptionImage } from './styles';

import filmes from '../../assets/images/filmes.png';
import compras from '../../assets/images/compras.png';
import jogos from '../../assets/images/jogos.png';
import redesSociais from '../../assets/images/redes-sociais.png';

export default function Interesses({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <HeaderBar width={33.33} step={1} max={3} navigation={navigation} />
      </Container>
      <Content>
        <Title>
          O que você mais gosta{'\n'}
          de fazer na internet?
        </Title>
        <Description>Escolha uma das opções abaixo.</Description>
        <Options>
          <Option item={0}>
            <OptionImage source={compras} />
            <OptionText>Compras</OptionText>
          </Option>

          <Option item={1} right>
            <OptionText>Jogos</OptionText>
            <OptionImage source={jogos} />
          </Option>

          <Option item={2}>
            <OptionImage source={filmes} />
            <OptionText>Filmes</OptionText>
          </Option>

          <Option item={3} right>
            <OptionImage source={redesSociais} />
            <OptionText>Redes sociais</OptionText>
          </Option>
        </Options>
      </Content>
      
    </SafeAreaView>
  );
}
