if ($(window).width() <= 1023 && !$('.main .book').hasClass('.mobile')) {
    $('.main .btn').before($('.main .book'));
    $('.main .book').addClass('mobile');
}

if ($(window).width() > 1023 && $('.main .book').hasClass('.mobile')) {
    $('.main .pdf').before($('.main .book'));
    $('.main .book').removeClass('mobile');
}