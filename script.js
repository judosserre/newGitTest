var main = function () {

    
    $("#circle").resizable({
        aspectRatio: true
    }).draggable();

    $("#square").resizable({
        aspectRatio: true
    }).draggable();

    $("#rectangle").resizable({
        aspectRatio: true
    }).draggable();
    
    $(".cat").draggable();
    
    $("#cat").resizable({
        aspectRatio: true
    });
    
    $(".container > *").dblclick(function(){
        $(this).prependTo(".container")
    });

};

$(document).ready(main);