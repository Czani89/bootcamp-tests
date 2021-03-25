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
