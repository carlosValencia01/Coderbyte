function FirstReverse(str) { 

    var newString = "";
  
    // add each character to newString
    for (var i = str.length - 1; i >= 0; i--) {   
      newString = newString + str.charAt(i);
    }
  
    return newString;
           
  }
  // keep this function call here    
  FirstReverse(readline());  