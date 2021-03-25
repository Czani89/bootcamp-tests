describe('findItemsOver' , function(){
    it('should show objects that have a quantity over the threshold(30)' , function(){

        assert.deepEqual(findItemsOver([
            {"name" : 'apples', "qty" : 10},
            {"name" : 'pears', "qty" : 37},
            {"name" : 'bananas', "qty" : 27},
            {"name" : 'apples', "qty" : 3}
        ],30),
    
        [{"name" : 'pears', "qty" : 37}]);
    });
    it('should show objects that have a quantity over the threshold(20)' , function(){

        assert.deepEqual(findItemsOver([
            {"name" : 'apples', "qty" : 10},
            {"name" : 'pears', "qty" : 37},
            {"name" : 'bananas', "qty" : 27},
            {"name" : 'apples', "qty" : 3}
            ],20),
    
        [{"name" : 'pears', "qty" : 37},
        {"name" : 'bananas', "qty" : 27}
    ]);
    });


});

