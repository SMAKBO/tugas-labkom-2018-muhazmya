$(document).ready(function() {
    $(window).scroll(function(e) {
        var s = $(window).scrollTop(),
            opacityVal = (s / 200);

        $('.blurred-image').css('opacity', opacityVal);
    });
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});