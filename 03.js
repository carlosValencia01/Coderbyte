function LetterChanges(str) { 

    var convertir = str.replace(/[a-z]/gi, function(char) { 
      return (char === 'z' || char === 'Z') ? 'a' : String.fromCharCode(char.charCodeAt() + 1);
    });
  
    var mayusculas = convertir.replace(/a|e|i|o|u/gi, function(vocal) { 
      return vocal.toUpperCase();
    });
    
    return mayusculas;
           
  }
     
  // keep this function call here 
  LetterChanges(readline());                            
  