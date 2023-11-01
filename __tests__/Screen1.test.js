import React from 'react';
import Screen1 from '../src/Screen1';
import {describe, it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({})),
}));
describe('Screen1', () => {
  it('should render the same as the snapshot', () => {
    const tree = renderer.create(<Screen1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
