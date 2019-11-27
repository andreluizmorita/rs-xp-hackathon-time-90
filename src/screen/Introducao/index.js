import React, { useEffect } from 'react';
import { Image } from 'react-native';
import Swiper from 'react-native-swiper';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';

import { Text, Screen, Button, ButtonText, Content } from './styles';

import slide1 from '../../assets/images/image_4.png';
import slide2 from '../../assets/images/image_2.png';

export default function Introducao({ navigation }) {

  useEffect(() => {
    console.log(navigation)
  }, []);

  function handleLogin() {
    /* TODO:
      - Login Facebook
      - Login Google
    */
    console.log(navigation);
    navigation.navigate('BoasVindasScreen');
  }

  return (
    <Swiper >
      <Screen>
        <Image source={slide1} />
        <Text>
          Você sabe como são feitos {'\n'}
          os aplicativos que{'\n'}
          usa no dia-a-dia?
        </Text>
      </Screen>
      <Screen>
        <Image source={slide2} style={{ marginTop: -90 }}/>
        <Text>
          A tecnologia está mais{'\n'}
          próxima que você imagina.{'\n'} 
          Quer saber como?
        </Text>
        
        <Content>
          <Button onPress={handleLogin} >
            <ButtonText><FontAwesomeIcon icon={faFacebookF} color="#fff" /> Login com Facebook</ButtonText>
          </Button>
          <Button onPress={handleLogin} white>
            <ButtonText white><FontAwesomeIcon icon={faGoogle} color="#00B4FF"/> Login com Google</ButtonText>
          </Button>
        </Content>
        
      </Screen>
    </Swiper>
  )
}
  