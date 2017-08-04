$(document).ready(function main() {
   
    //Set Grid Size
    
    // Generate Default Grid
    setGridSizeByTable();
    
    // Generate New Grid
    $('#grid-size-btn-container').click(setGridSizeByTable);
    
    // Color Grid when hovered over
    $(document).on("mouseenter", ".pixel",colorPixel);
    $(document).on("mouseenter", ".table-pixel",colorPixel);
    
  
    // $(".pixel").css("backgroundColor", "blue");
    
});

function colorPixel() {
    var color = "#0000FF";
    percent = "0.0"
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
        percent = percent + .1;
        shadeColor = shadeColor2(color, percent);
        conole.log(percent);
        console.log(shadeColor);
        
        $(this).css("backgroundColor", shadeColor);
    } else {
        $(this).css("backgroundColor", color);
    }
    //$(this).css("filter", 10%);
    
    
}

function setGridSizeByTable() {
    eraseGrid();
    
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
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}