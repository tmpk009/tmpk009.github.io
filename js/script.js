$(document).ready(function(){
    
    var headerHeight = $("header").height();
    console.log(headerHeight);
    var count = 1;
    var click_count=0;
    
    var no_basket = localStorage.getItem('no_items');
    console.log(no_basket);
    var items = parseInt(no_basket);
    
    if (no_basket == null){
        $('#basket').html('Basket(0)');
        items = 0;
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
            if (items==1){
                alert('Only per customer!');
            }
            else{
                items+=1;
                localStorage.setItem('no_items', items);
                $('#basket').html('Basket('+items+')');
                $('#display_basket').append('<div id="selected"><p class="in_item">The Now Now - CD - £10.00 <img id="remove" src="assets/close_button.png"></p></div>');
                alert('item added to basket!');
                localStorage.setItem('is_there',true);
                count++;
            }
        });
    
    $('#basket').click(function(){
        $("#display_basket").css("visibility", "visible");
        $("#basket_back").css("visibility", "visible");
        var present = localStorage.getItem('is_there');

        if (present== 'true' && count==1){
            $('#display_basket').append('<div id="selected"><p class="in_item">The Now Now - CD - £10.00 <img id="remove" src="assets/close_button.png"></p></div>');
            count = count+1;
            items=localStorage.getItem('no_items');;
        }
        $('#close').click(function(){
            $("#display_basket").css("visibility", "hidden");
            $("#basket_back").css("visibility", "hidden");
        });
        
        $('#remove').click(function(){
            $('#selected').remove();
            items= items-1;
            localStorage.setItem('no_items', items);
            $('#basket').html('Basket('+items+')');
            present='false';
            localStorage.setItem('is_there', false);
        });
        
        $('#checkout').click(function(){
            alert('Your order has been placed!');
            $('#selected').remove();
            items= items-1;
            localStorage.setItem('no_items', items);
            $('#basket').html('Basket('+items+')');
            present='false';
            localStorage.setItem('is_there', false);
        });
        
        
        
    });
    
    $('#burger').click(function(){
        if($('.mobile_nav').css('visibility')=='hidden'){
            $('.mobile_nav').css('visibility', 'visible');
        }
        else{
            $('.mobile_nav').css('visibility', 'hidden');
        }
    });
    
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('nav').css('visibility', 'hidden');
        $('.mobile_menu').css('visibility', 'visible').animate({opacity: 1.0}, 2000);
        $('.main_nav').css('visibility', 'hidden');
    }
    
    
    console.log('ready');
    console.log($(window).width());
    console.log($(window).height());
    
})