$(document).ready(function main() {
   
    //Set Grid Size
    
    // Generate Default Grid
    setGridSizeByTable();
    
    // Generate New Grid
    $('#set-grid-size-btn').click(setGridSizeByTable);
    
    // Color Grid when hovered over
    $(document).on("mouseenter", ".pixel",colorPixel);
    $(document).on("mouseenter", ".table-pixel",colorPixel);
    
  
    // $(".pixel").css("backgroundColor", "blue");
    
});

function colorPixel() {
    $(this).css("backgroundColor", "blue");
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