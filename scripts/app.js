
function importantChange(){
    console.log("clicked!");
    $("#iImportant").removeClass("far").addClass("fas");
}

function init(){
    console.log("Task manager");

// load data

// hook events
$("#iImportant").click(toggleImportant);
}


window.onload = init;