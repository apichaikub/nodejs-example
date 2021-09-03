var assert = require('assert');

describe('String#split_', function(){
  it('should return an array', function(){
    assert(Array.isArray('a,b,c'.split(',')));
  });
});
