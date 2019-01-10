$(document).ready(function(){
    drawing();
    init();
    
});

function init(){
    console.log('canvas ready');
}

function drawing(){
     back_img = localStorage.getItem('wall');
    $('canvas').css('background-image','back_img');
    var el = document.getElementById('c');
    var ctx = el.getContext('2d');
    var isDrawing, storeAs;

    el.onmousedown = function(e) {
      isDrawing = true;
      ctx.moveTo(e.clientX, e.clientY);
    };
    el.onmousemove = function(e) {
      if (isDrawing) {
        var radgrad = ctx.createRadialGradient(
          e.clientX,e.clientY,10,e.clientX,e.clientY,20);

        radgrad.addColorStop(0, 'red');
        radgrad.addColorStop(0.5, 'rgba(255,179,179,0.5)');
        radgrad.addColorStop(1, 'rgba(255,230,230,0)');
        ctx.fillStyle = radgrad;

        ctx.fillRect(e.clientX-20, e.clientY-20, 40, 40);
      }
    };
    el.onmouseup = function() {
      isDrawing = false;
        storeAs = el.toDataURL("img/png");
        window.localStorage.setItem('wall', storeAs);
    };
   
}