describe('fromWhere' , function(){
    it('should show Bellville when string "CY" is passed' , function(){
        assert.equal(fromWhere("CY"), "Bellville");

    });
    it('should show Paarl when string "CJ" is passed' , function(){
        assert.equal(fromWhere("CJ"), "Paarl");

    });
    it('should show Cape Town when string "CA" is passed' , function(){
        assert.equal(fromWhere("CA"), "Cape Town");

    });
    it('should show "Some other place!" any other when string other than "CA", "CJ" or  "CY" is passed' , function(){
        assert.equal(fromWhere("CA"), "Cape Town");

    });

});