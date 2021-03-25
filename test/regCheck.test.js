describe('regCheck' , function(){
    it('should show true for the province the of the registration number(GP) passed in' , function(){
        assert.equal(regCheck('DV 23 NB GP', "GP"),true);
    });
    it('should show false for the province the of the registration number(MP) passed in' , function(){
        assert.equal(regCheck('DV 23 LP GP', 'MP'),false);
    });
    it('should show true for the province the of the registration number(CY) passed in' , function(){
        assert.equal(regCheck('CY 189-012', 'CY'),true);
    });


});