## Mocha:

What is Mocha:





assert.equal(result, expectedResult)

assert.staticequal(result, expectedResult)

assert.deepequal(result, expectedResult)

```mocha
describe('Calculate', () => {
  describe('.sum',() => {
    it('returns the sum of an array of numbers', () => {
      const expectedResult = 6;
      const inputArray = [1,2,3]
      const result = Calculate.sum(inputArray)
      
      assert.equal(result, expectedResult);
    });
```

