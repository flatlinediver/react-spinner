import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Spinner from '../index'

afterEach(cleanup)

describe('Spinner thickness', () => {
    it('renders spinner with round stroke-linecap', () => {
        const { queryByTestId } = render(<Spinner />);
        expect(queryByTestId('circle')).toHaveAttribute('stroke-linecap', "round");
    });
    it('renders spinner with round stroke-linecap', () => {
        const { queryByTestId } = render(<Spinner edges="round"/>);
        expect(queryByTestId('circle')).toHaveAttribute('stroke-linecap', "round");
    });
    it('renders spinner with square stroke-linecap', () => {
        const { queryByTestId } = render(<Spinner edges="square"/>);
        expect(queryByTestId('circle')).toHaveAttribute('stroke-linecap', "square");
    });
});