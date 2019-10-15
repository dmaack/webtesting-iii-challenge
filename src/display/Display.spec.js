// Test away!

import React from 'react';
import { renderer } from 'react-test-renderer';
import { render, fireEvent } from 'react-testing-library';
import Display from './Display';

import 'jest-dom/extend-expect';

test('Display renders correctly', () => {
    expect(render(<Display />)).toMatchSnapshot();
});

// describe('<Display />', () => {
//     it('should match snapshot', () => {
//         const tree = renderer.create(<Display />).toJSON();

//         expect(tree).toMatchSnapshot;
//     })
// });



it('Gate defaults to "unlocked" and "open"', () => {
    const { getByText } = render( <Display /> );
    const Unlocked = getByText(/unlocked/i);
    const Open = getByText(/open/i);
    expect(Unlocked).toBe(Unlocked);
    expect(Open).toBeTruthy();
})

it('displays "Locked" if the locked prop is true and "Unlocked" if otherwise', () => {
    const { getByText } = render(<Display locked={true} />)
    const Locked = getByText(/locked/i);
    expect(Locked).toBeTruthy();
})

//checking  classNames

it('when locked or closed use the red-led class', () => {
    const { getByText } = render(<Display locked={true} closed={true} />)
    const Locked = getByText(/locked/i);
    expect(Locked).toHaveClass('red-led');
})

it('when unlocked or open use the green-led class', () => {
    const { getByText } = render(<Display locked={false} closed={false} />);
    const Open = getByText(/open/i);
    expect(Open).toHaveClass('green-led')
})