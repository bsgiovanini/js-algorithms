expect.extend({
  arraysToBeEqual(actual, received) {
    const pass = received.length === actual.length && received.every((r,i) => r === actual[i]);
    const message =
      () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return {message, pass};
  }
});

let QuickFind = null;

beforeAll(function() {
	QuickFind = require('../QuickFind').default;
})

test('should construct vector [1,2]', () => {
    
    expect(new QuickFind(2).id).arraysToBeEqual([undefined, 1, 2]);
});

test('should return 3 when finding 3 in a recently created array with size 5', () => {
	const qf = new QuickFind(5);
	expect(qf.find(3)).toBe(3);
	expect(qf.counter).toBe(5);
});


test('should return 1 after union (3,1) when finding 3', () => {
	const qf = new QuickFind(5);
	expect(qf.union(3,1).find(3)).toBe(1); 
	expect(qf.counter).toBe(4);
	expect(qf.isConnected(3,1)).toBeTruthy();
	expect(qf.isConnected(1,3)).toBeTruthy();

})

test('should return 1 after unions (3,1) and (5,3) when finding 5', () => {
	const qf = new QuickFind(5);
	expect(qf.union(3,1).union(5,3).find(5)).toBe(1); 
	expect(qf.counter).toBe(3);
	expect(qf.isConnected(3,5)).toBeTruthy();
	expect(qf.isConnected(1,5)).toBeTruthy();
})

