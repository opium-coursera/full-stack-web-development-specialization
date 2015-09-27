var colours = { "aliceblue":"#f0f8ff", 
                "antiquewhite":"#faebd7",
                "aqua":"#00ffff",
                "aquamarine":"#7fffd4",
                "azure":"#f0ffff",
                "beige":"#f5f5dc",
                "bisque":"#ffe4c4",
                "black":"#000000",
                "blanchedalmond":"#ffebcd",
                "blue":"#0000ff",
                "blueviolet":"#8a2be2",
                "brown":"#a52a2a",
                "burlywood":"#deb887",
                "cadetblue":"#5f9ea0",
                "wheat":"#f5deb3",
                "white":"#ffffff",
                "whitesmoke":"#f5f5f5"
              }

var aimColorName;

var colourNames = Object.keys(colours);

function guess() { 
    //generate random guessing color number
    var aimColorIndex = Math.floor(Math.random() * (colourNames.length-1));
    //calculate aim color name
    aimColorName = colourNames[aimColorIndex]
    
    var finished = false;
    while (!finished) {        
        inputColor = prompt("I am thinking of one of these colors: \n\n" +
                                  colourNames.join("\n") + "\n\n" + 
                                  "What color am I thinkiing of?");
        
        //Cancel pressed
        if (inputColor === null) {
            finished = true;
            //TODO: add output message
            return;
        }
        
        finished = checkGuess(inputColor)                            
    }    
    
    
}

function checkGuess(inputColor) {
    if (inputColor == aimColorName) {
        return true
    }
    
    if (inputColor == "") {
        alert("Sorry your guess is not correct! \n\n Hint: Empty string is INVALID color \n\n Please try again.") 
        return false
    }
    
    if (colourNames.indexOf(inputColor) == -1) {
        alert("Sorry your guess is not correct! \n\n Hint: your color is NOT part of my list. \n\n Please try again.") 
        return false
    }
    
    if (inputColor > aimColorName) {
        alert("Sorry your guess is not correct! \n\n Hint: your color is alphabetically HIGHER than mine. \n\n Please try again.") 
        return false
    }
    
    if (inputColor < aimColorName) {
        alert("Sorry your guess is not correct! \n\n Hint: your color is alphabetically LOWER than mine. \n\n Please try again.") 
        return false
    }
}    

