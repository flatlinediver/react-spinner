// import React from 'react';
// import { render, cleanup } from '@testing-library/react';
// import Spinner, {SpinnerContext} from '../index';

// afterEach(cleanup)

// describe('Spinner colors', () => {
//     it('renders spinner with papayawhip color prop', () => {
//         const { queryByTestId } = render(<Spinner colors="papayawhip"/>);
//         expect(queryByTestId('circle')).toHaveStyle(`
//             stroke: papayawhip;
//         `);
//     });
//     it('renders spinner with papayawhip color prop', () => {
//         const { queryByTestId } = render(<Spinner colors="papayawhip"/>);
//         expect(queryByTestId('circle')).toHaveStyle(`
//             stroke: papayawhip;
//         `);
//     });

//     test('Spinner shows value from provider', () => {
//         const tree = (
//             <SpinnerContext.Provider value={{colors: 'red'}}>
//                 <Spinner />
//             </SpinnerContext.Provider>
//         )
//         const { queryByTestId } = render(tree);
//         expect(queryByTestId('circle')).toHaveStyle(`
//             stroke: red;
//         `);
//       })

// });

// describe('Spinner colors warnings and errors', () => {
//     const originalWarn = console.warn
//     const originalError = console.error
//     afterEach(() => {
//         console.warn = originalWarn
//         console.error = originalError
//     });
  
//     describe('Check console.warn() output', () => {
//         let consoleWarnOutput: string;
//         const mockedWarn = (output: any) => consoleWarnOutput = output;
//         beforeEach(() => (console.warn = mockedWarn));
//         const expecteOutput: string = '{{ react-spinner }} -> if colors length is greater then 4, only 4 values are used.';
//         it(`expect console.warn to be "${expecteOutput}"`, () => {
//             render(<Spinner colors={['red', 'blue', 'yellow', 'papayawhip', 'green']} />)
//             expect(consoleWarnOutput).toEqual(expecteOutput);
//         });
//     });
//     describe('Check console.error() output', () => {
//         it('should throw', () => {
//             expect(() => render(<Spinner colors='tetst' />)).toThrow();
//         });
//     });
// });