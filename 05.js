function LetterCapitalize(str) {
    var resultado = "";
    for (var i = 0; i < str.length; i++) {
      if (str.charAt(i-1) === " " || i === 0) {
        resultado += str.charAt(i).toUpperCase();
      } else {
        resultado += str.charAt(i);
      }
    }
    return resultado;
           
  }
     
  LetterCapitalize(readline());
                         
  