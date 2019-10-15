// Test away!

import React from 'react';
import { renderer } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';

test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// describe('<Controls/>', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Controls />).toJSON();

//         expect(tree).toMatchSnapshot();
//     })
// });


