function SimpleSymbols(str) { 
    var rtn=true, letters=str.split("");
    if (letters[0].match(/[a-z]/i)) rtn=false;
    for (i=1; i<letters.length; i++) if (letters[i].match(/[a-z]/i)) {if (!letters[i-1].match(/[\+]/) || !letters[i+1].match(/[\+]/)) rtn=false;}
    return rtn; 
  }
  SimpleSymbols(readline());
                         
  