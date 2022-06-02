import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import React from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import MyTabs from './MyTabs';
import Page1Screen from './screen/Page1Screen';
import {styles} from './theme/appTheme';

const Drawer = createDrawerNavigator();

export function MyDrawerCustom() {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width > 768 ? 'permanent' : 'front',
      }}
      drawerContent={props => <MenuInterno {...props} />}>
      <Drawer.Screen name="My Tabs" component={MyTabs} />
      <Drawer.Screen name="Page1" component={Page1Screen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('My Tabs')}
          style={styles.button}>
          <Text style={styles.textWhite}>My Tabs</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Page1')}
          style={styles.button}>
          <Text style={styles.textWhite}>Link 1</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
