expect.extend({
  arraysToBeEqual(actual, received) {
    const pass = received.length === actual.length && received.every((r,i) => r === actual[i]);
    const message =
      () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return {message, pass};
  }
});

let PCWQuickUnion = null;

beforeAll(function() {
	PCWQuickUnion = require('../PCWQuickUnion').default;
})

test('should construct vector [1,2]', () => {
    
    expect(new PCWQuickUnion(2).id).arraysToBeEqual([undefined, 1, 2]);
});

test('should return 3 when finding 3 in a recently created array with size 5', () => {
	const qf = new PCWQuickUnion(5);
	expect(qf.root(3)).toBe(3);
	expect(qf.counter).toBe(5);
});


test('should return 3 after union (3,1) when finding 3', () => {
	const qf = new PCWQuickUnion(5);
	expect(qf.union(3,1).root(3)).toBe(3); 
	expect(qf.counter).toBe(4);
	expect(qf.isConnected(3,1)).toBeTruthy();
	expect(qf.isConnected(1,3)).toBeTruthy();

})

test('should return 1 after unions (3,1) and (5,3) when finding 5', () => {
	const qf = new PCWQuickUnion(5);
	expect(qf.union(3,1).union(5,3).root(5)).toBe(3); 
	expect(qf.counter).toBe(3);
	expect(qf.isConnected(3,5)).toBeTruthy();
	expect(qf.isConnected(1,5)).toBeTruthy();
})

