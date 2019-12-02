import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Todo, Title, TodoForm} from './components/index';

const App = () => {
  const [todos, setTodos] = useState([]);

  const onConfirmTodo = todoDescription => {
    setTodos([...todos, todoDescription]);
  };

  return (
    <View style={styles.container}>
      <Title title={'TODO LIST'} />
      <TodoForm onConfirmTodo={onConfirmTodo} />
      <Todo todos={todos} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});

export default App;
