import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MyDrawerCustom} from './src/MyDrawerCustom';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawerCustom />
    </NavigationContainer>
  );
};

export default App;
