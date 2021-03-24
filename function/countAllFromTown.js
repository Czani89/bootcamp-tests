function countAllFromTown(regNum, regNumStr){
    //console.log(regNum)
     let regN = regNum.split(",");
     
     let allReg = [];
     
     for( let i=0; i<regN.length; i++){
    
       if(regN[i].startsWith("CL")){
         allReg.push(regN[i]);
         //console.log(regNum1)
       }
          }
     return allReg.length
   }