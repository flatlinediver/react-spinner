import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spinner from '../index';

afterEach(cleanup);

describe('Spinner render', () => {
  it('renders spinner correctly', () => {
    const { queryByTestId } = render(<Spinner />);
    expect(queryByTestId('spinner')).toBeTruthy();
  });
});
