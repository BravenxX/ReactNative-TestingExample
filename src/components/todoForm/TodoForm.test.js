import React from 'react';
import {render, fireEvent} from 'react-native-testing-library';
import {TodoForm} from './TodoForm';

describe('TodoForm', () => {
  it('Write a todo', () => {
    const onConfirmTodo = jest.fn();
    const {getByTestId} = render(<TodoForm onConfirmTodo={onConfirmTodo} />);

    const TODO_INPUT = 'miTodo';

    fireEvent.changeText(getByTestId('todoInput'), TODO_INPUT);
    expect(getByTestId('todoInput').props.value).toEqual(TODO_INPUT);

    fireEvent.press(getByTestId('formButton'));
    expect(onConfirmTodo).toHaveBeenCalledWith(TODO_INPUT);
  });
});
