## Math

**Random number**

```js
// Geeting a random # between 0(inclusive) and 1(exclusive)
function getRandom() {
  return Math.random();
}

// Getting a random number between two values
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```



## 1D-Array

**Sum of Array**

```js
const array = [1, 2, 3, 4];
array.reduce((accumulator, currentValue) => accumulator + currentValue)
// expected output: 10
```





## 2D-Array

### To create an *empty* 2D-Array with given size (adaptable for more dimensions):

```js
let array = Array(rows).fill().map(() => Array(columns));
```

### Prefilled 2D-Array:

```js
let array = Array(rows).fill().map(() => Array(columns).fill(0));
```

Eg:

```js
Array(2).fill().map(() => Array(3).fill(42));
// Result:
// [[42, 42, 42],
//  [42, 42, 42]]
```

