const capitalize = require('./capitalize.js');

test('capitalize first letter of single word', () => {
    expect(capitalize('hello')).toEqual('Hello');
});