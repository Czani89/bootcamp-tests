describe('greet function' , function(){
    it('should greet the name that is parsed in the function properly, for this case "Cinga"' , function(){
        assert.equal(greet("Cinga"),"Hello, Cinga");
    });
    it('should greet the name that is parsed in the function properly, for this case "Nzwakie"' , function(){
        assert.equal(greet("Nzwakie"),"Hello, Nzwakie");
    });
    it('should greet the name that is parsed in the function properly, for this case "Jodie"', function(){
        assert.equal(greet("Jodie"),"Hello, Jodie");
    });

});