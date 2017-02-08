expect.extend({
  arraysToBeEqual(actual, received) {
    const pass = received.length === actual.length && received.every((r,i) => r === actual[i]);
    const message =
      () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return {message, pass};
  }
});

let MergeSort = null;

beforeAll(function() {
	MergeSort = require('../MergeSort').default;
})

test('should throw error if array argument is invalid', () => {

    expect(function() { const bs = new MergeSort(2); }).toThrowError(/invalid array/);
    expect(function() { const bs = new MergeSort(); }).toThrowError(/invalid array/);
    expect(function() { const bs = new MergeSort(null); }).toThrowError(/invalid array/);
    expect(function() { const bs = new MergeSort(undefined); }).toThrowError(/invalid array/);

});

test('should merge two arrays in asc order', () => {
    expect(function() {
      let array = [2,3]; 
      new MergeSort([]).merge(array, 0, 0, 1);
      return array;
    }()).arraysToBeEqual([2,3]);
    expect(function() {
      let array = [2,7,5,8]; 
      new MergeSort([]).merge(array,0, 1, 3);
      return array;
    }()).arraysToBeEqual([2,5,7,8]);
});

test('should sort an array', () => {
    expect(function() {
      const m = new MergeSort([2,3]);
      return m.sort();
    }()).arraysToBeEqual([2,3]);
    expect(function() {
      const m = new MergeSort([2,7,5,8]);
      return m.sort();
    }()).arraysToBeEqual([2,5,7,8]);
});

test('should sort an array bottom up', () => {
    expect(function() {
      const m = new MergeSort([2,3]);
      return m.sortBottomUp();
    }()).arraysToBeEqual([2,3]);
    expect(function() {
      const m = new MergeSort([2,7,5,8]);
      return m.sortBottomUp();
    }()).arraysToBeEqual([2,5,7,8]);
});





