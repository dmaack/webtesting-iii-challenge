// Test away!

import React from 'react';
import { renderer } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display';

test('Display renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// describe('<Display />', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Display />).toJSON();

//         expect(tree).toMatchSnapshot;
//     })
// });