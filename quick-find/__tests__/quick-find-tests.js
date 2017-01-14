
expect.extend({
  arraysToBeEqual(actual, received) {
    const pass = received.length === actual.length && received.every((r,i) => r === actual[i]);
    const message =
      () => `expected ${received} ${pass ? 'not ' : ''} to be ${actual}`;
    return {message, pass};
  }
});

test('should construct vector [1,2]', () => {
    let QuickFind = require('../QuickFind').default;
    console.log(QuickFind);
    expect(new QuickFind(2).id).arraysToBeEqual([1, 2]);
});




