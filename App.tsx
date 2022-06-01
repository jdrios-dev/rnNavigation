import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {MyDrawer} from './src/MyDrawer';

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
