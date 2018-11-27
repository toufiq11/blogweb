$(document).ready(function(){
    $('.js--testimonial').click(function(){
        $('html, body').animate({scrollTop: $('.js--go_testimonial').offset().top},1000);
    });
    
    /* smooth-scroll */
    
   $('a').smoothScroll();
/*
  $('.animation').each(function(){

		var waypoint = new Waypoint({
		  element: this,
		  handler: function(direction) {
		    var animation = $(this.element).attr('data-animation');
		    $(this.element).css('opacity','1');
		    $(this.element).addClass("animated " + animation);
		  },
		  offset: '75%' 
		})
	});

    */
    
    /*fixed header*/
    
    $(window).scroll(function(){
       var top = $(window).scrollTop();
        if(top>=512){
            $("header").addClass('solid_blue');
        }
        else
            if($("header").hasClass('solid_blue')){
                $("header").removeClass('solid_blue');
            }
    });
    
    /* scroll effect*/
    
    $('.js--wp-1').waypoint(function(direction){
         $('.js--wp-1').addClass('animated fadeInLeft');
    },{
         offset: '75%'
    });
    
     $('.js--wp-2').waypoint(function(direction){
         $('.js--wp-2').addClass('animated fadeInUp');
    },{
         offset: '50%'
    });
    
     $('.js--wp-3').waypoint(function(direction){
         $('.js--wp-3').addClass('animated  fadeInUp');
    },{
         offset: '80%'
    });
    
    
     $('.js--wp-4').waypoint(function(direction){
         $('.js--wp-4').addClass('animated  swing');
    },{
         offset: '50%'
    });
    
    $('.js--wp-5').waypoint(function(direction){
         $('.js--wp-5').addClass('animated   fadeInRight');
    },{
         offset: '50%'
    });
});