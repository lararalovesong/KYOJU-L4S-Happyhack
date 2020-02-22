
jQuery(function(){
    jQuery(window).scroll(function (){
        jQuery('.effect-fade').each(function(){
            var elemPos = jQuery(this).offset().top;
            var scroll = jQuery(window).scrollTop();
            var windowHeight = jQuery(window).height();
            if (scroll > elemPos - windowHeight + 200){
                jQuery(this).addClass('effect-scroll');
            }
        });
    });
  });
