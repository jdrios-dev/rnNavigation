import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

const Tab2Screen = () => {
  useEffect(() => {
    console.log('tab2');
  }, []);
  return (
    <View>
      <Text>Tab2Screen</Text>
    </View>
  );
};

export default Tab2Screen;
