$(document).ready(function(){
    
    var headerHeight = $("header").height();
    console.log(headerHeight);
    
    var items = parseInt(localStorage.getItem('no_items'));
    
    if (items!=0 || items<1){
        $('#basket').html('Basket(0)');
        localStorage.setItem('no_items', 0);
    }
    
    $('#basket').html('Basket('+items+')');
    
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

            var target = this.hash,
            $target = $(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top - headerHeight
            }, 1000, 'swing', function () {
                
            });
            console.log($target.offset().top - headerHeight);
        });
    
        $('#no_link').click(function(){
            alert('no available dates!');
        });
    
        $('#basketadd').click(function(){
            items+=1;
            localStorage.setItem('no_items', items);
            $('#basket').html('Basket('+items+')');
            alert('item added to basket!');
        });
    
    $('#basket').click(function(){
        $("#display_basket").css("visibility", "visible");
        $("#basket_back").css("visibility", "visible");
    });
    
    $('#close').click(function(){
        $("#display_basket").css("visibility", "hidden");
        $("#basket_back").css("visibility", "hidden");
    });
    
    console.log('ready');
    
    
    
})