$(document).ready(function(){
    
    var headerHeight = $("header").height();
    console.log(headerHeight);


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
            alert('item added to basket!');
        });
    
    console.log('ready');
    
    
    
})