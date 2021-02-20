var init = function () {
    if ($(window).width() <= 1023 && !$('.main .book').hasClass('mobile')) {
        $('.main .btn').before($('.main .book'));
        $('.main .book').addClass('mobile');
    }
    
    if ($(window).width() > 1023 && $('.main .book').hasClass('mobile')) {
        $('.main .pdf').before($('.main .book'));
        $('.main .book').removeClass('mobile');
    }
}

init();
$(window).resize(init);

$('body').on('click', '.features a', function () {
    $("html, body").stop().animate({scrollTop: $(document).height()}, 500, 'swing', function() { 
        
    });
})

$('body').on('click', '.btn', function () {
    $("html, body").stop().animate({scrollTop: $(document).height()}, 500, 'swing', function() { 
        
    });
})