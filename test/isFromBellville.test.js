describe('isFromBellville function' , function(){
    it('should return true for registration number from Bellville(registration starting with "CY") ' , function(){
        assert.equal(isFromBellville('CY 123'),true);
    });
    it('should return false for registration number not from Bellville(registration starting with "CY"' , function(){
        assert.equal(isFromBellville("CJ 123"), false);
    });

});