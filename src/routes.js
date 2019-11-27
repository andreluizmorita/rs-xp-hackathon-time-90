import React from 'react';
import { Easing, Animated } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import { Transition } from 'react-native-reanimated';

import IntroducaoScreen from './screen/Introducao';
import LoginScreen from './screen/Login';
import BoasVindasScreen from './screen/BoasVindas';
import OqueGostaScreen from './screen/OqueGosta';
import InteressesScreen from './screen/Interesses';
import SugestaoPerfilScreen from './screen/SugestaoPerfil';
import AplicacoesScreen from './screen/Aplicacoes';
import TrilhaScreen from './screen/Trilha';

const AuthNavigator = createStackNavigator(
  {
    InteressesScreen,
    IntroducaoScreen,
    LoginScreen
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const MainStackNavigator = createStackNavigator(
  { 
    BoasVindasScreen,
    InteressesScreen,
    SugestaoPerfilScreen,
    AplicacoesScreen,
    TrilhaScreen,
  },
  {
    headerMode: 'none',
  },
);

const RootStackNavigator = createStackNavigator(
  {
    AuthNavigator,
    MainStackNavigator
  },
  {
    headerMode: 'none',
    transitionConfig: () => ({
      transitionSpec: {
        duration: 300,
        easing: Easing.out(Easing.poly(4)),
        timing: Animated.timing,
      },
      screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });

        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateY }] };
      },
    }),
  },
);

const SwitchNavigator = createAnimatedSwitchNavigator(
  {
    RootStackNavigator,
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out
          type="slide-bottom"
          durationMs={400}
          interpolation="easeIn"
        />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
  },
);

const Routes = createAppContainer(SwitchNavigator);

export default Routes;
