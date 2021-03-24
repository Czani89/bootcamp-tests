function findItemsOver(threshold){
    console.log(threshold)
    let itemArr =[]
    
    for(let i=0; i< threshold.length; i++){
     var listItem = threshold[i];
      if(listItem.qty > 20){
        itemArr.push(listItem)
      }
    }
  return itemArr
  }