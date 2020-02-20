
    $(function(){
        var setImg = '#viewer';
        var fadeSpeed = 1000;
        var switchDelay = 3000;
      
        $(setImg).children('img').css({opacity:'0'});
        $(setImg + ' img:first').stop().animate({opacity:'1',zIndex:'-1'},fadeSpeed);
      
        setInterval(function(){
            $(setImg + ' :first-child').animate({opacity:'0',zIndex:'-2'},fadeSpeed).next('img').animate({opacity:'1',zIndex:'-1'},fadeSpeed).end().appendTo(setImg);
        },switchDelay);
    });
