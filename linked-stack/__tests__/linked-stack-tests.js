
let LinkedStack = null;

beforeAll(function() {
	LinkedStack = require('../LinkedStack').default;
})

test('it should pop the last item pushed ', () => {
    
    expect(new LinkedStack().pop()).toBe(null);
    
    expect(new LinkedStack().push(3).push(2).pop()).toBe(2);
    
});


test('it should return the sequence d c a', () => {
    
    const ls = new LinkedStack();
    ls.push('a').push('b').pop();
    ls.push('c').push('d').push('e').pop();
    expect(ls.pop()).toBe('d');
    expect(ls.pop()).toBe('c');
    expect(ls.pop()).toBe('a');
    
    
});

