describe('countAllFromTown ' , function(){
    it('should show you the number of registraroin numbers starting with the string "CL"' , function(){
    
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'),3);
    });
    it('should show zero for registraroin numbers starting with the string "CL"' , function(){
    
        assert.deepEqual(countAllFromTown('CF 124,CY 567,CF 345, CJ 456,CF 341','CL'), 0);
    });
    it('should show you the number of registraroin numbers starting with the string "CF"' , function(){
    
        assert.deepEqual(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CF'),3);
    });
    


});
