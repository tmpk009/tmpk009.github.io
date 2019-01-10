$(document).ready(function(){
    
    var headerHeight = $("header").height();

    var count = 1;
    var click_count=0;
    
    //sets variables for the basket based on the data local storage has
    var no_basket = localStorage.getItem('no_items');

    var items = parseInt(no_basket);
    
    if (no_basket == null){
        $('#basket').html('Basket(0)');
        items = 0;
    }
    
    $('#basket').html('Basket('+items+')');
    
        //animation for scrolling when nav item is pressed
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
        
        //alert for tour tickets button
        $('#no_link').click(function(){
            alert('No Currently Available Dates!');
        });
        
        //for when user clicks 'add to basket'
        $('#basketadd').click(function(){
            //only allows user to purchase one of the item per order
            if (items==1){
                alert('Only One Per Order!');
            }
            //adds to basket if not already there
            else{
                //sets items in local storage to +1
                items+=1;
                localStorage.setItem('no_items', items);
                $('#basket').html('Basket('+items+')');
                //appends html so that item is displayed in basket
                $('#display_basket').append('<div id="selected"><p class="in_item">The Now Now - CD - £10.00 <img id="remove" src="assets/close_button.png"></p></div>');
                alert('Item Added To Basket!');
                localStorage.setItem('is_there',true);
                count++;
            }
        });
    
    //for user when basket is clicked
    $('#basket').click(function(){
        //alters css so that basket elements are now visible
        $("#display_basket").css("visibility", "visible");
        $("#basket_back").css("visibility", "visible");
        //variable to check an item is stored in local storage
        var present = localStorage.getItem('is_there');
        
        //this is to avoid any errors with displaying the items in the basket when pages with 'basket' are reloaded
        if (present== 'true' && count==1){
            $('#display_basket').append('<div id="selected"><p class="in_item">The Now Now - CD - £10.00 <img id="remove" src="assets/close_button.png"></p></div>');
            count = count+1;
            items=localStorage.getItem('no_items');;
        }
        //hides basket elements when the basket is closed
        $('#close').click(function(){
            $("#display_basket").css("visibility", "hidden");
            $("#basket_back").css("visibility", "hidden");
        });
        
        //removes item from basket
        $('#remove').click(function(){
            $('#selected').remove();
            if(items<=0){
                items=0;
                localStorage.setItem('no_items', items);
                $('#basket').html('Basket('+items+')');
            }
            else{
                items = items -1;
                localStorage.setItem('no_items', items);
                $('#basket').html('Basket('+items+')');
            }
            present='false';
            localStorage.setItem('is_there', false);
        });
        
        //displays popup then removes item from basket
        $('#checkout').click(function(){
            alert('Your order has been placed!');
            $('#selected').remove();
            
            items=0;
            localStorage.setItem('no_items', items);
            $('#basket').html('Basket('+items+')');
            
            present='false';
            localStorage.setItem('is_there', false);
        });
        
        
        
    });
    
    //burger menu button toggles visibility of the nav bar
    $('#burger').click(function(){
        if($('.mobile_nav').css('visibility')=='hidden'){
            $('.mobile_nav').css('visibility', 'visible');
        }
        else{
            $('.mobile_nav').css('visibility', 'hidden');
        }
    });
    
    //detects mobile displays and alters css accordingly
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $('.main_nav').css('visibility', 'hidden');
        $('#news3').css('visibility','hidden');
        $('.mobile_menu').css('visibility','visible')
        $('#videos iframe').css('width','100%');
        $('.main .section').css('width','90vw');
        $('canvas').css('width', '500');
        $('canvas').css('height', '300');
    }
    
    //popup displayed to user when they sign up to the newsletter
    $('#sign_up #link_button').click(function(){
        alert('Now on mailing list!'); 
    });
    
    
    console.log('ready');
    
})