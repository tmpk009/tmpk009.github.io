$(document).ready(function(){
    
    var headerHeight = $("header").height();
    console.log(headerHeight);
    var count = 1;
    
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
            alert($(window).width());
            
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
    
    
    
    
    console.log('ready');
    
    
    
})