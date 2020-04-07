import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Spinner from '../index'

afterEach(cleanup)

describe('Spinner size', () => {
    it('renders spinner with 35px size', () => {
        const { queryByTestId } = render(<Spinner size={30}/>);
        expect(queryByTestId('spinner')).toHaveStyle(`
           width: 35px;
           height: 35px;
        `);
    });
});