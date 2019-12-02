import React from 'react';
import {View, Text} from 'react-native';

const Title = ({title}) => {
  return (
    <View>
      <Text testID={title}>{title}</Text>
    </View>
  );
};

export {Title};
