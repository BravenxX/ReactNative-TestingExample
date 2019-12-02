import React from 'react';
import {View, Text} from 'react-native';

const Todo = ({todos}) => {
  return (
    <View>
      {todos.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export {Todo};
