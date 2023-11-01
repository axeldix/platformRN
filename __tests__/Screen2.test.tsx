import React from 'react';
import Screen2 from '../src/screens/Screen2';
import {describe, it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({})),
}));
describe('Screen2', () => {
  it('should render the same as the snapshot', () => {
    const tree = renderer.create(<Screen2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
