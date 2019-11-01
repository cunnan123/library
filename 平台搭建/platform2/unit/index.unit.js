describe("index", function () {
    it("add", function () {
        chai.assert.equal(add(2, 4), 6)
    });
    it("add2", function () {
        chai.assert.equal(add2(2, 4), 6)
    });

    it('add3', function () {
        var foo = 'bar'
        var beverages = {
            tea: ['chai', 'matcha', 'oolong']
        }
        chai.expect(foo).to.be.a('string');
        chai.expect(foo).to.equal('bar');
        chai.expect(foo).to.have.lengthOf(3);
        chai.expect(beverages).to.have.property('tea').with.lengthOf(3);
    })
});