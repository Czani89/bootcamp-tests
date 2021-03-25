describe('countAllPaarl' , function(){
    it('Should show you the number of the number of registrations from Paarl("CJ)' , function(){

        assert.deepEqual(countAllPaarl("CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123"),3);
    });
    it('Should show zero registration numbers  from Paarl("CJ")' , function(){

        assert.deepEqual(countAllPaarl("CL 123-546, CK 345"),0);
    });
    it('Should show you the number of the number of registrations from Paarl("CJ)' , function(){

        assert.deepEqual(countAllPaarl("CJ 345 123, CK 345, CJ 123"),2);
    });

});