import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';

import { 
  Container,
  Title,
  Description,
  ListItems,
  ListItem,
  ListText,
  Button,
  ButtonText,
  CircleIcon,
  FlexRow,
  ListSelected,
} from './styles';

export default function ListaInteresses({ navigation }) {
  const responseData = [
    {
      id: 1,
      title: 'Grava vídeos para internet',
      selected: false
    },
    {
      id: 2,
      title: 'Participar de trabalhos volutários',
      selected: false
    },
    {
      id: 3,
      title: 'Tocar um instrumento musical',
      selected: false
    },
    {
      id: 4,
      title: 'Ir a escola',
      selected: false
    },
    {
      id: 5,
      title: 'Participar esportes',
      selected: false
    },
    {
      id: 6,
      title: 'Tirar fotos',
      selected: false
    },
    {
      id: 7,
      title: 'Assistir séries e filmes',
      selected: false
    },
    {
      id: 8,
      title: 'Estudas sobre músicas',
      selected: false
    },
    {
      id: 9,
      title: 'Assistir Anime',
      selected: false
    },
    {
      id: 10,
      title: 'Tirar fotos',
      selected: false
    },
    {
      id: 11,
      title: 'Viajar',
      selected: false
    }
  ];


  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(responseData);
  }, []);

  function handleSelected(id) {
    const itemsSeleted = items.map(item => item.id === id ? {...item, selected: !item.selected} : item);
    setItems(itemsSeleted)
  }

  function handleBack() {
    navigation.goBack();
  }

  return (
    <Container>
      <FlexRow>
        <CircleIcon onPress={handleBack}>
          <FontAwesomeIcon icon={faTimes} color="#242833" />
        </CircleIcon>

        <Title>
          Principais{'\n'}
          Interesses
        </Title> 
      </FlexRow>
      
      <Description>Escolha até 4 opções</Description>

      <ListItems showsVerticalScrollIndicator={false}>
        {items.map(item => {
          return (
            <ListItem key={item.id} onPress={() => handleSelected(item.id)}>
              <ListText selected={item.selected}>{item.title}</ListText>
              <ListSelected>
                {!!item.selected && <FontAwesomeIcon icon={faCheck} color="#00B4FF" />}
              </ListSelected>
            </ListItem>
          )
        })}
      </ListItems>

      <Button bottom center blue onPress={handleBack}>
        <ButtonText center blue>Confirmar</ButtonText>
      </Button>
    </Container>
  );
}
