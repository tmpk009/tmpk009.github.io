$(document).ready(function(){
    
    
    /*$(window).scroll(function() {    // this will work when your window scrolled.
		var height = $(window).scrollTop();  //getting the scrolling height of window
		if(height  > 100) {
			$("header").css({"position": "fixed"});
		} else{
			$("header").css({"position": "relative"});
		}
	});*/
    
    var headerHeight = $("header").height();
    console.log(headerHeight);


    $(document).ready(function(){
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
    });
    
    console.log('ready');
    
    alert('Hello!');
    
})

