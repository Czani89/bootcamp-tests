function countAllPaarl(regN){
    let regNumber = regN.split(",");
    
     let regNumTemp =[];
    
    for(let i = 0; i<regNumber.length; i++){
      let regNum = regNumber[i].trim();
      if(regNum.startsWith("CJ")){
        regNumTemp++;
      }
      
      
      }
   return regNumTemp;
  }