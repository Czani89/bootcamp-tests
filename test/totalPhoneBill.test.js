describe('totalPhoneBill' , function(){
    it('should show you how much the phone bill is 3 smss and  2 calls made' , function(){
        assert.equal(totalPhoneBill('call, sms, call, sms, sms'), "R7.45");

    });
    it('should show you how much the phone bill is 1 smss and  2 calls made' , function(){
        assert.equal(totalPhoneBill('call, sms, call'), "R6.15");

    });
   
});
