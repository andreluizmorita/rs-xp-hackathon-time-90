import React from 'react';
import {YellowBox} from 'react-native';
import Routes from './routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'Battery state',
  'componentWillMount',
  'componentWillUpdate',
  'componentWillReceiveProps',
  '[location] ERROR - 0',
  'Warning: DatePickerAndroid',
  'RCTRootView cancelTouches',
]);


function App() {
  return <Routes />;
}

export default App;
