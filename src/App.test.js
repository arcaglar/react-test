import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';

test('snapshot test', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot()
})