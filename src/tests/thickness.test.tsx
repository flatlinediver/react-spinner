import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Spinner from '../index'

afterEach(cleanup)

describe('Spinner thickness', () => {
    it('renders thick=false spinner with default size with stroke-width equal to 3.2265625', () => {
        const { queryByTestId } = render(<Spinner />);
        expect(queryByTestId('circle')).toHaveAttribute('stroke-width', "3.2265625");
    });
    it('renders thick=true spinner with default size with stroke-width equal to 6.453125', () => {
        const { queryByTestId } = render(<Spinner thick/>);
        expect(queryByTestId('circle')).toHaveAttribute('stroke-width', "6.453125");
    });
});