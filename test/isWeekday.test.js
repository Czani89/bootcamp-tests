describe('isWeekday' , function(){
    it('Should return true for days mid-week' , function(){
        assert.equal(isWeekday("Tuesday"), true);

    });
    it('Should return false for days in the weekend' , function(){
        assert.equal(isWeekday("Saturday"), false);
        
    });

});