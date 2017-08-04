$(document).ready(function main() {
   
    //Set Grid Size
    
    // Generate Default Grid
    setGridSizeByTable();
    
    // Generate New Grid
    $('#grid-size-btn-container').click(setGridSizeByTable);
    $('#clear-btn-container').click(setGridSizeByTable);
    
    // Color Grid when hovered over
    $(document).on("mouseenter", ".pixel",colorPixel);
    $(document).on("mouseenter", ".table-pixel",colorPixel);
    
  
    // $(".pixel").css("backgroundColor", "blue");
    
});


var percent = 0.0;

function colorPixel() {
    
    var color = "#FFFFFF";
    
    
    
    if (document.getElementById('red-radio-btn').checked) {
        color = document.getElementById('red-radio-btn').value;
    } else if (document.getElementById('blue-radio-btn').checked) {
        color = document.getElementById('blue-radio-btn').value;
    } else if (document.getElementById('green-radio-btn').checked) {
        color = document.getElementById('green-radio-btn').value;
    } else if (document.getElementById('random-radio-btn').checked) {
        color = getRandomColor();
    }
    console.log(color);
    
    
    if (document.getElementById('gradient-checkbox').checked){
        percent = percent + .05;
        if (percent > 1) {
            percent = 1;
        }
        $('#color-radio-btnss').click(function(){percent = 0.0;});
        roundedPercent = percent.toFixed(2);
        shadeColor = shadeColor2(color, roundedPercent);
        //color = shadeColor;
        console.log("Percent: " + percent);
        console.log("Rounded Percent: " + roundedPercent);
        console.log("shadeColor: " + shadeColor);
        
        $(this).css("backgroundColor", shadeColor);
    } else {
        $(this).css("backgroundColor", color);
        percent = 0;
    }
    //$(this).css("filter", 10%);
    
    
}

function setGridSizeByTable() {
    eraseGrid();
    percent = 0.0;
    var size = $("input[name=grid-size]").val();
    console.log("Grid set to " + size + "x" + size);
    
    // Build Table
    var tableContent = "<table id='display-table'>";
    
    // Add row and table data
    var i = 0;
    for (i = 0; i < size; i++) {
        tableContent += "<tr class='pixel-row'>";
        for (var j = 0; j < size; j++) {
             tableContent += "<td class='table-pixel'></td>";
        
        }
        tableContent += "</tr>";
    }
    tableContent += "</table>";
    console.log(tableContent);
    $("#display").append(tableContent);
    
}

function setGridSizeByDiv(){
    eraseGrid();
    
    var size = $("input[name=grid-size]").val();
    console.log("Grid set to " + size + "x" + size);
    //var width = ((512-(2*size))/size) + "px";
    var width = (512/size) + "px";
    var height = width;
    
    console.log(width);
    
    var i = 0;
    for (i = 0; i < size*size; i++) {
        $("#display").append("<div class='pixel'></div>");    
    }
    
    $(".pixel").css("width", width);
    $(".pixel").css("height", height);
    
}

function eraseGrid() {
    
    $(".pixel").remove();
    $("#display-table").remove();
    
}

function getRandomColor() {
    var letters = '0987654321ABCDEF';
    var color ='#';
    
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    
}

function shadeColor2(color, percent) {  
    console.log("Passed In Color: " + color);
    console.log(f);
    var f = parseInt(color.slice(1),16);
    console.log("f value: " + f.toString(16));
    var t = percent < 0 ? 0:255;
    var p = percent < 0 ? percent*-1:percent;
    var R = f>>16;
    console.log("R value: " + R.toString(16));
    var G = f>>8&0x00FF;
    var B = f&0x0000FF;
    
    // Goes to White
    // var result = "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
    
    // Goes to Black
    var myRed = ((R - Math.round(R*p))).toString(16);
    console.log("Red before: #" + myRed);
    if (myRed.length !== 2) {
        myRed = "00";
    }
    console.log("Red: #" + myRed);
    
    var myGreen = ((G - Math.round(G*p))).toString(16);
    console.log("Green before: #" + myGreen);
    if (myGreen.length !== 2) {
        myGreen = "00";
    }
    console.log("Green: #" + myGreen);
    
    var myBlue = (B - Math.round(B*p)).toString(16);
    if (myBlue.length !== 2) {
        myBlue = "00";
    }
    console.log("Blue: #" + myBlue);
               
    var result = "#"+ (myRed + myGreen + myBlue).slice(0);
    
    console.log("Result " + result);
    if (result.length !== 7)
    {
        return "#000000";
    } else {
        return result;
    }
}