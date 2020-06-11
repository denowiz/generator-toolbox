# Generator toolbox

Deal with generators in hasty manner.

## How to use

Just import the whole module:

```javascript
import { * } from 'https://...'
```

## Documentation

#### cycle

Create an infinite sequence iterating over the elements of the provided array.

```javascript
cycle([1, 2, 3])
//=> 1, 2, 3, 1, 2, 3, 1, 2, ...
```

#### iterate

Creates an infinite sequence of repeated applications of the function fn over the x.

```javascript
const succ = (x) => x + 1
iterate(succ, 0)
//=> 0, 1, 2, 3, ...
```

#### repeat

Creates an infinite sequence of x.

```javascript
repeat(1)
//=> 1, 1, 1, 1, 1, ...
```

#### take

Take the **n** firsts elements of the given generator or generator function.

```javascript
const succ = (x) => x + 1
const numbers = iterate(succ, 0)

take(4, numbers)
//=> 0, 1, 2, 3
```