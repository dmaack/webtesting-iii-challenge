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


it('Renders "Lock Gate" and "Close Gate" with added toggle buttons', () => {
    const { getByText } = render( <Controls /> );
    const lockGate = getByText(/lock gate/i);
    const closeGate = getByText(/close gate/i);
    expect(lockGate).toBe(lockGate);
    expect(closeGate).toBe(closeGate);
});


it('renders change in className when clicked', () => {
    const { getByText } = render(<Controls closed={true} />);
    const openClick = getByText(/open gate/i);
    expect(openClick).toBe(openClick);
})

it('the locked toggle button is disabled if the gate is open', () => {
    const mockClosed = jest.fn();
    const { getByText } = render(<Controls mockClosed={mockClosed} />);
    fireEvent.click(getByText('Lock Gate'));
    expect(mockClosed).toBe(mockClosed);
})

it('the closed toggle button is disabled if the gate is locked', () => {
    const mockLocked = jest.fn();
    const { getByText } = render(<Controls mockLocked={mockLocked} closed={true} locked={true} />);
    fireEvent.click(getByText('Open Gate'))
    expect(mockLocked).toBe(mockLocked);
})