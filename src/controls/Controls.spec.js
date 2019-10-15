// Test away!

import React from 'react';
import { renderer } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Controls from './Controls';
import { isMainThread } from 'worker_threads';
import { get } from 'http';

test('Controls renders correctly', () => {
    expect(render(<Controls />)).toMatchSnapshot();
});

// describe('<Controls/>', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Controls />).toJSON();

//         expect(tree).toMatchSnapshot();
//     })
// });


it('Renders "Lock Gate" and "Close Gate"', () => {
    const { getByText } = render( <Controls /> );
    const lockGate = getByText('Lock Gate');
    const closeGate = getByText('Close Gate');
    expect(lockGate).toBe(lockGate);
    expect(closeGate).toBe(closeGate);

})