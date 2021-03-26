describe('transportFee' , function(){
    it('should show you that the morning transport fee is R20' , function(){
        assert.equal(transportFee('morning'),'R20');

    });
    it('should show you that the afternoon transport fee is R10' , function(){
        assert.equal(transportFee('afternoon'),'R10');

    });
    it('should show you that the nightshift transport fee is free' , function(){
        assert.equal(transportFee('nightshift'),'free');

    });

});
