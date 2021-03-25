function yearsAgo(year){
    //console.log(year)
    var currentDate = new Date
   
     var currentYear = currentDate.getFullYear()
    //  console.log(currentYear)
    return currentYear - year;
  }