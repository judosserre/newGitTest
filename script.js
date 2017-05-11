var main = function () {

    $("container").resizable({
        aspectRatio: true
    }).draggable();

    
    $("#circle").resizable({
        aspectRatio: true
    }).draggable();

    $("#square").resizable({
        aspectRatio: true
    }).draggable();

    $("#rectangle").resizable({
        aspectRatio: true
    }).draggable();
    




};

$(document).ready(main);