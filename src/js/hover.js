function colorChange() {
    $("#box").css("opacity", 0.5);
    console.log("HELLO")
}
function revert() {
    $("#box").css("opacity", 0.1);
}



// function check(){
//     jQuery(function($) {

//         var width = $(document).width();
//         var height = $(document).height()
//         var point = {x : width/2, y: height/2};
        
//         console.log(point.x, point.y)
//         var dPoint = Math.sqrt(Math.pow((currentMousePos.x - point.x), 2) + Math.pow((currentMousePos.y - currentMousePos.x)))
//         var max = Math.sqrt(Math.pow((point.x), 2) + Math.pow((currentMousePos.x)))
//         console.log(dPoint)
//         // currentMousePos.x
//         $("#box").css("opacity", (dPoint/max));    
//     });
// };

var currentMousePos = { x: -1, y: -1 };
$(document).mousemove(function(event) {
    currentMousePos.x = event.pageX;
    currentMousePos.y = event.pageY;
    var width = $(document).width();
    var height = $(document).height()
    var point = {x : width/2, y: height/2};
        
    var dPoint = Math.sqrt(Math.pow((currentMousePos.x - point.x), 2) + Math.pow((currentMousePos.y - point.x), 2))
    var max = Math.sqrt(Math.pow((point.x), 2) + Math.pow((currentMousePos.x), 2))
    // currentMousePos.x
    console.log(dPoint/max)
    $(".title").css("opacity", dPoint/max);
});

// setInterval(check, 500);