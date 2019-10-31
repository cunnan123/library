var _memory = require('../../src/cache/index.js').MemoryCache;
describe('memoryCache test',function(){
    var _memeoryCache;
    _memeoryCache = new _memory();
    beforeEach(function(){ //每运行一个it时，之前执行
    });
    it('push',function(){
        var foo = {"name":"foo.Name"};
        _memeoryCache.push("foo",foo);
        var _destFoo = _memeoryCache.get('foo',true);
        expect(_destFoo).toBe(foo);
    });
    it('get', function(){
       expect(_memeoryCache.get('foo',true)).not.toBeNull();
    });
    it('remove',function(){
        _memeoryCache.remove('foo');
        expect(_memeoryCache.get('foo')).toBeNull();
    });
});