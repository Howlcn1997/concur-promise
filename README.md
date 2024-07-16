# concurPromise

[![NPM version](https://img.shields.io/npm/v/concur-promise.svg?style=flat)](https://npmjs.com/package/concur-promise)
[![NPM downloads](http://img.shields.io/npm/dm/concur-promise.svg?style=flat)](https://npmjs.com/package/concur-promise)

`concurPromise` is a utility function that prevents duplicate execution of identical Promise calls in a short time span, ensuring concurrent requests are only processed once.

## Installation

You can install `concurPromise` via npm:

```
npm install concur-promise
```

## Usage

Here is an example of how to use `concurPromise` in your project:

```typescript
import concurPromise from "concur-promise";
import axios from "axios";

// Define a Promise function
const fetchData = (url: string) =>
  axios.get(url).then((response) => response.data);

// Wrap the Promise function with concurPromise
const concurrentFetchData = concurPromise(fetchData);

// Use the wrapped function
concurrentFetchData("https://api.example.com/data")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## API

### concurPromise(promiseFn, [options])

#### Parameters

- `promiseFn`: The Promise function to be wrapped.
- `options` (optional): An options object with the following properties:
  - `isEqual`: A function to compare if two sets of arguments are equal. Defaults to `lodash.isEqual`.

#### Returns

- A new function that accepts the same arguments as `promiseFn` and returns a Promise.

## Example

```typescript
import concurPromise from "concur-promise";

const mock = () => new Promise(resolve => setTimeout(() => resolve(Math.random()), 1000))

const concurMock = concurPromise(mock);

concurMock().then(console.log) // 0.9504616758704281
concurMock().then(console.log) // 0.9504616758704281

```

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## Acknowledgements

This utility function uses `lodash.isequal` for argument comparison.
