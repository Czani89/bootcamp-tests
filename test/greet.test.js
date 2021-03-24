describe('greet function' , function(){
    it('should greet Cinga' , function(){
        assert.equal(greet("Cinga"),"Hello, Cinga");
    });
    it('should greet Nzwakie' , function(){
        assert.equal(greet("Nzwakie"),"Hello, Nzwakie");
    });
    it('should greet Jodie' , function(){
        assert.equal(greet("Jodie"),"Hello, Jodie");
    });

});