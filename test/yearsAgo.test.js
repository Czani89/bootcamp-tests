describe('yearsAgo', function(){
    it('should show you the number of years from 1989 to present year' , function(){
        assert.equal(yearsAgo(1989),32);
    });
    it('should show you the number of years from 2010 to present year' , function(){
        assert.equal(yearsAgo(2010),11);
    });


});
