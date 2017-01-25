expect.extend({
  arraysToBeEqual(actual, received) {
    const pass = received.length === actual.length && received.every((r,i) => r === actual[i]);
    const message =
      () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return {message, pass};
  }
});

let BinarySearch = null;

beforeAll(function() {
	BinarySearch = require('../BinarySearch').default;
})

test('should throw error if array argument is invalid', () => {

    expect(function() { const bs = new BinarySearch(2); }).toThrowError(/invalid array/);
    expect(function() { const bs = new BinarySearch(); }).toThrowError(/invalid array/);
    expect(function() { const bs = new BinarySearch(null); }).toThrowError(/invalid array/);
    expect(function() { const bs = new BinarySearch(undefined); }).toThrowError(/invalid array/);

});

test('should find the correct index position of a item', () => {

    expect(new BinarySearch([2]).search(2)).toBe(0);
    expect(new BinarySearch([2,4,5,6]).search(2)).toBe(0);
	expect(new BinarySearch([2,4,5,6]).search(5)).toBe(2);
	expect(new BinarySearch([2,4,5,6]).search(3)).toBe(-1);
});

test('should find recursively the correct index position of a item', () => {

    expect(new BinarySearch([2]).searchRecursive(2)).toBe(0);
    expect(new BinarySearch([2,4,5,6]).searchRecursive(2)).toBe(0);
    expect(new BinarySearch([2,4,5,6]).searchRecursive(5)).toBe(2);
	expect(new BinarySearch([2,4,5,6]).searchRecursive(3)).toBe(-1);
	expect(new BinarySearch([2,4,5,6]).searchRecursive(6)).toBe(3);

});


test('should find recursively the correct index position of a item with comparator', () => {

    expect(function() {new BinarySearch([2,4,5,6], function(a) {return 1})}).toThrowError(/invalid comparator/);
    expect(new BinarySearch(['aCa','ARa','AZA','Bye']).search('aCa')).not.toBe(0);
    expect(new BinarySearch(['aCa','ARa','AZA','Bye'], function(a,b) {
    	const lA = a.toLowerCase();
    	const lB = b.toLowerCase();
    	return (lA < lB)? -1: (lA > lB)? 1 : 0;
    }).searchRecursive('aCa')).toBe(0);
});



