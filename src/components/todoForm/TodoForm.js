import React, {useState} from 'react';
import {View, Button, TextInput} from 'react-native';

const TodoForm = ({onConfirmTodo}) => {
  const [todoDescription, setTodoDescription] = useState('');

  const onPressBtn = () => {
    setTodoDescription('');
    onConfirmTodo(todoDescription);
  };

  return (
    <View>
      <TextInput
        testID={'todoInput'}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={text => setTodoDescription(text)}
        value={todoDescription}
      />

      <Button testID={'formButton'} title="Agregar" onPress={onPressBtn} />
    </View>
  );
};

export {TodoForm};
