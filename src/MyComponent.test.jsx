import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

test('MyComponent renders correctly', () => {
  const tree = renderer
    .create(<MyComponent />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
