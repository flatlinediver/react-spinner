# [![Build Status](https://travis-ci.com/flatlinediver/react-spinner.svg?branch=master)](https://travis-ci.com/flatlinediver/react-spinner) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/flatlinediver/react-spinner/blob/master/CONTRIBUTING.md) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/flatlinediver/react-spinner/blob/master/LICENSE)

# Loading spinner based on Material-UI

## [Demo](https://react-spinner.netlify.com/)

## Installation

```
npm i -S @flatlinediver/react-spinner

```
```
yarn add @flatlinediver/react-spinner

```

<br/>

### Basic usage example

```js
import React from 'react';
import Spinner from '@flatlinediver/react-spinner';


export default = ({data}) => (
    {data.length
        ? <div>Mapped data</div>
        : <Spinner />
    }
)
```

<br />

### Example using Suspense

```js
import React from 'react';
import Spinner from '@flatlinediver/react-spinner';
const LazyComponent = lazy(() => import('./lazy-component'));

export default = () => (
    <Suspense fallback={<Spinner />}>
        <LazyComponent />
    </Suspense>
)
```

<br />


### Example with props

```js
import React from 'react';
import Spinner from '@flatlinediver/react-spinner';
const LazyComponent = lazy(() => import('./lazy-component'));

export default = () => (
    <Suspense fallback={
        <Spinner
            position = 'fixed'
            center
            colors = {['papayawhip', 'palevioletred']}
            speed = 'fast'
            size = {40}
            thick
            edges = 'square'
        />
    }>
        <LazyComponent />
    </Suspense>
)
```

<br />

### Example with Spinner Context Provider (Overridden by Spinner props)

[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

```js
import React from 'react';
import Spinner, {SpinnerProvider} from '@flatlinediver/react-spinner';
const LazyComponent = lazy(() => import('./lazy-component'));

export default = () => (
    <SpinnerProvider
        position = 'fixed'
        center
        colors = {['papayawhip', 'palevioletred']}
        speed = 'fast'
        size = {40}
        thick
        edges = 'square'
    >
        <Suspense fallback={
            <Spinner speed='slow' />
        }>
            <LazyComponent />
        </Suspense>
    </SpinnerProvider>
)
```

<br />

### Available imports
- `ReactSpinner` - main Spinner component
- `SpinnerProvider` - Spinner context Provider
- `DEFAULT_SPINNER_VALUES` - Spinner default values
- `SpinnerContext` - `Deprecated`  Spinner context Provider (will be removed in the next release)

### Available props

- `position` - 'fixed', 'absolute' or 'static'. Spinner position based on the first relative parent. `Default: 'static'`
- `center` -  boolean. Centers spinner based on the first relative parent. Ignored when position is set to 'static'. `Default: false`
- `top` -  string (5px / 1em) / zero (0). Spinner top based on the first relative parent. Ignored when position is set to 'static' or center is true. `Default: auto`
- `right` -  string (5px / 1em) / zero (0). Spinner right based on the first relative parent. Ignored when position is set to 'static' or center is true. `Default: auto`
- `bottom` -  string (5px / 1em) / zero (0). Spinner bottom based on the first relative parent. Ignored when position is set to 'static' or center is true. `Default: auto`
- `left` -  string (5px / 1em) / zero (0). Spinner left based on the first relative parent. Ignored when position is set to 'static' or center is true. `Default: auto`
- `colors` -  string ('#ff0') / array of strings (['papayawhip', 'palevioletred']).Either fix stroke color or array of colors to be animated (timing is based on the array's length). Note: max-length is 4 and wrong colors throw an error. `Default: ['#222', '#aaa']`
- `speed` -  'slow', 'fast', 'normal'. Spinner animation timing. `Default: 'normal'`
- `size` -  number mapped to px. `Default: 32`
- `thick` -  boolean. Spinner stroke-width. `Default false`
- `edges` -  'square', 'round'. Spinner stroke-linecap. `Default: 'round'`