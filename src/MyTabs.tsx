import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Tab1Screen from './screen/Tab1Screen';
import Tab2Screen from './screen/Tab2Screen';
import Tab3Screen from './screen/Tab3Screen';
import {colors} from './theme/appTheme';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;

            case 'Tab3Screen':
              iconName = 'T3';
              break;

            default:
              break;
          }
          return <Text style={{color}}>{iconName}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 1,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      })}>
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="Tab3Screen"
        options={{title: 'Tab3'}}
        component={Tab3Screen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
