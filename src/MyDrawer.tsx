import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import Page1Screen from './screen/Page1Screen';
import Page2Screen from './screen/Page2Screen';

const Drawer = createDrawerNavigator();

export function MyDrawer() {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width > 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen
        name="Page1"
        options={{title: 'Home'}}
        component={Page1Screen}
      />
      <Drawer.Screen
        name="Page2"
        options={{title: 'Settings'}}
        component={Page2Screen}
      />
    </Drawer.Navigator>
  );
}
