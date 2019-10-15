// Test away

import React from 'react';
import { renderer } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Dashboard from './Dashboard';
import { isMainThread } from 'worker_threads';


//From lecture guidance

test('Dashboard renders correctly', () => {
    expect(render(<Dashboard />)).toMatchSnapshot();
});

// With Training Kit guidance 

// describe('<Dashboard />', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Dashboard />).toJSON();

//         expect(tree).toMatchSnapshot;
//     })
// });