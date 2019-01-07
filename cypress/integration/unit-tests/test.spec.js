describe('Unit Test Application Code', () => {
  context('Dummy', () => {
    it('Check property', () => {
      expect({ foo: 'bar' }).to.have.property('foo', 'bar');
    });
  });
});
