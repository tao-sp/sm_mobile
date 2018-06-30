$(function () {
    $(".right-nav-lists li").click(function () {
        $(this).siblings().children("ul").slideUp();
        $(this).children("ul").slideToggle();
    })
    $(".right-nav").click(function () {
        $(".right-nav-content").animate({right:"0"});
    })
    $(".right-nav-close").click(function () {
        $(".right-nav-content").animate({right:"-100%"});
    })
})
