function findItemsOver20(objects){
    //console.log(objects)
    let itemArr =[]
    
    for(let i=0; i< objects.length; i++){
     var listItem = objects[i];
      if(listItem.qty > 20){
        itemArr.push(listItem)
      }
    }
  return itemArr
  }
  
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