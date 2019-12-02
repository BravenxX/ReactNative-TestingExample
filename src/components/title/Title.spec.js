import React from 'react';
import {render} from 'react-native-testing-library';
import {Title} from './Title';

describe('PassingProps', () => {
  it('displays the passed-in age', () => {
    const TITULO = 'TituloTest';

    const {queryByText} = render(<Title title={TITULO} />);
    expect(queryByText(TITULO)).not.toBeNull();
  });
});
