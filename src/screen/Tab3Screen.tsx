import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tab3Screen = () => {
  useEffect(() => {
    console.log('tab3');
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};

export default Tab3Screen;
