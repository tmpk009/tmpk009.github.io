//only runs functions when the document has fully loaded in
$(document).ready(function(){
    drawing();
    init();
    
});

function init(){
    console.log('canvas ready');
}

function drawing(){
    //doesn't load in previous saved wall
    back_img = localStorage.getItem('wall');
    $('canvas').css('background-image','back_img');
    var mycanvas = document.getElementById('c');
    var ctx = mycanvas.getContext('2d');
    var isDrawing, storeAs;
    
    //when mouse is pressed down
    mycanvas.onmousedown = function(e) {
      isDrawing = true;
      ctx.moveTo(e.clientX, e.clientY);
    };
    //when mouse moved while clicked down
    mycanvas.onmousemove = function(e) {
      if (isDrawing) {
        var radgrad = ctx.createRadialGradient(
          e.clientX,e.clientY,10,e.clientX,e.clientY,20);
        
        //sets painting colour
        radgrad.addColorStop(0, 'red');
        radgrad.addColorStop(0.5, 'rgba(255,179,179,0.5)');
        radgrad.addColorStop(1, 'rgba(255,230,230,0)');
        ctx.fillStyle = radgrad;

        ctx.fillRect(e.clientX-20, e.clientY-20, 40, 40);
      }
    };
    
    //when the mosue is released
    mycanvas.onmouseup = function() {
      isDrawing = false;
        storeAs = mycanvas.toDataURL("img/png");
        //stores wall *Doesn't work as intended*
        window.localStorage.setItem('wall', storeAs);
    };
   
}