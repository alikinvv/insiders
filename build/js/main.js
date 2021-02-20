let init = () => {
    if ($(window).width() <= 1023 && !$('.main .book').hasClass('mobile')) {
        $('.main .btn').before($('.main .book'));
        $('.main .book').addClass('mobile');
    }
    
    if ($(window).width() > 1023 && $('.main .book').hasClass('mobile')) {
        console.log('object');
        $('.main .pdf').before($('.main .book'));
        $('.main .book').removeClass('mobile');
    }
}

init();
$(window).resize(init);