describe('countRegNumber function' , function(){
    it('should take in a string of registration numbers and return the number of registrion numbers in the string ' , function(){
        assert.equal(countRegNumber("CA 182736,CY 523519,CJ 812328"), 3);
    });
    it('should take in a string of registration numbers and return the number of registrion numbers in the string ' , function(){
        assert.equal(countRegNumber('CA 42665, AA 12 RT GP'), 2);
    });
    
});