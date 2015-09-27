var colors = ["aqua", "black", "cyan"];
var aimColorNumber;

function guess() { 
    //generate random guessing color number
    aimColorNumber = Math.floor(Math.random() * (colors.length-1));
    
    var finished = false;
    while (!finished) {
        inputColor = prompt("I am thinking of one of these colors: \n\n" +
                                  colors + "\n\n" + 
                                  "What color am I thinkiing of?");
        
        //Cancel pressed
        if (inputColor === null) {
            finished = true;
            return;
        }
        
        var colorIndex = colorArrayIndex(inputColor);
    }
}

function colorArrayIndex(color) {
    if (!isNaN(color) || color == "") {
        alert("You have entered empty input \n\n" +
              "Please enter a color from the list.");
        return -1;    
    }
    
    return colors.indexOf(color);    
}


