$(document).ready(function main() {
    //var $pixelDiv = $("<div>", {id: "pixel"});0
    var pixelDiv = document.createElement("div");
    pixelDiv.className = 'pixel';
    console.log(pixelDiv);

    var i = 0;
    for (i = 0; i < 10; i++) {
        $("#display").children().append("<div class='pixel'></div>");    
    }   
});

