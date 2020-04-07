import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Spinner from '../index'

afterEach(cleanup)

describe('Spinner speed', () => {
    it('renders svg with animation-duration equal to 2s', () => {
        const { queryByTestId } = render(<Spinner />);
        expect(queryByTestId('svg')).toHaveStyle(`
            animation-duration: 2s;
        `);
    });
    it('renders svg with animation-duration equal to 2.5s', () => {
        const { queryByTestId } = render(<Spinner speed="slow"/>);
        expect(queryByTestId('svg')).toHaveStyle(`
            animation-duration: 2.5s;
        `);
    });
    it('renders svg with animation-duration equal to 1.5s', () => {
        const { queryByTestId } = render(<Spinner speed="fast"/>);
        expect(queryByTestId('svg')).toHaveStyle(`
            animation-duration: 1.5s;
        `);
    });
});