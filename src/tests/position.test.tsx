import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Spinner from '../index';

afterEach(cleanup);

describe('Spinner position', () => {
  it('renders spinner with fixed position and top/left/bottom/right auto', () => {
    const { queryByTestId } = render(<Spinner position="fixed" />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: fixed;
            top: auto;
            left: auto;
            bottom: auto;
            right: auto;
        `);
  });
  it('renders spinner with absolute position and top/left/bottom/right auto', () => {
    const { queryByTestId } = render(<Spinner position="absolute" />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: absolute;
            top: auto;
            left: auto;
            bottom: auto;
            right: auto;
        `);
  });
  it('renders spinner with absolute position and top=100px, left=100px & bottom/right auto', () => {
    const { queryByTestId } = render(<Spinner position="absolute" top="100px" left="100px" />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: absolute;
            top: 100px;
            left: 100px;
            bottom: auto;
            right: auto;
        `);
  });
  it('renders spinner with fixed position and top=100px, left=100px & bottom/right auto', () => {
    const { queryByTestId } = render(<Spinner position="fixed" top="100px" left="100px" />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: fixed;
            top: 100px;
            left: 100px;
            bottom: auto;
            right: auto;
        `);
  });
  it('renders spinner ignoring center', () => {
    const { queryByTestId } = render(<Spinner center />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: static;
            top: auto;
            left: auto;
            bottom: auto;
            right: auto;
        `);
  });
  it('renders spinner with position fixed and centered', () => {
    const { queryByTestId } = render(<Spinner position="fixed" center />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: fixed;
            top: auto;
            left: auto;
        `);
  });
  it('renders spinner with position absolute and centered', () => {
    const { queryByTestId } = render(<Spinner position="absolute" center />);
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        `);
  });
  it('renders spinner with position absolute and centered, ignoring top/left/bottom/right', () => {
    const { queryByTestId } = render(
      <Spinner position="absolute" center top="300px" left="300px" bottom="300px" right="300px" />
    );
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        `);
  });
  it('renders spinner with position fixed and centered, ignoring top/left/bottom/right', () => {
    const { queryByTestId } = render(
      <Spinner position="fixed" center top="300px" left="300px" bottom="300px" right="300px" />
    );
    expect(queryByTestId('spinner')).toHaveStyle(`
            position: fixed;
            top: auto;
            left: auto;
        `);
  });
});
