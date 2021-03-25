describe('findItemsOver20' , function(){
    it('should show you objects that have a quantity over 20' , function(){

        assert.deepEqual(findItemsOver20([
             {"name" : 'apples', "qty" : 10},
             {"name" : 'pears', "qty" : 37},
             {"name" : 'bananas', "qty" : 27},
            {"name" : 'apples', "qty" : 3}
        ],20),
    
    [{"name" : 'pears', "qty" : 37},
    {"name" : 'bananas', "qty" : 27}
        ])
    });

    it('should show you objects that have a quantity over 20' , function(){

        assert.deepEqual(findItemsOver20([
             {"name" : 'apples', "qty" : 10},
             {"name" : 'bananas', "qty" : 27},
            {"name" : 'apples', "qty" : 3}
        ],20),
    
    [{"name" : 'bananas', "qty" : 27}])
    });

});


