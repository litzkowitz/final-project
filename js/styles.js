$(function() {

    $(".activity").click(function() {
		$(this).closest(".parentselect").toggleClass("active");
    });

    $(".sporty-link").click(function() {
        $('.sporty').addClass('active');
    });

    $('.sporty-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.sporty').offset().top-0
         }, 500, 'swing', function () {
        });
    });


    $('.sporty-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.sporty').offset().top-0
         }, 500, 'swing', function () {
        });
    });


    $(".outdoorsy-link").click(function() {
        $('.outdoorsy').addClass('active');
    });

    $('.outdoorsy-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.outdoorsy').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.outdoorsy-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.outdoorsy').offset().top-0
         }, 500, 'swing', function () {
        });
    });


    $(".culinary-link").click(function() {
        $('.culinary').addClass('active');
    });

    $('.culinary-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.culinary').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.culinary-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.culinary').offset().top-0
         }, 500, 'swing', function () {
        });
    });


    $(".creative-link").click(function() {
        $('.creative').addClass('active');
    });

    $('.creative-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.creative').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.creative-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.creative').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $(".social-link").click(function() {
        $('.social').addClass('active');
    });

    $('.social-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.social').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.social-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.social').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $(".brainy-link").click(function() {
        $('.brainy').addClass('active');
    });

    $('.brainy-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.brainy').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.brainy-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.brainy').offset().top-0
         }, 500, 'swing', function () {
        });
    });

   $(".crafty-link").click(function() {
        $('.crafty').addClass('active');
    });

    $('.crafty-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.crafty').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.crafty-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.crafty').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $(".gutsy-link").click(function() {
        $('.gutsy').addClass('active');
    });

    $('.gutsy-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.gutsy').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.gutsy-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.gutsy').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $(".worldly-link").click(function() {
        $('.worldly').addClass('active');
    });

    $('.worldly-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.worldly').offset().top-0
         }, 500, 'swing', function () {
        });
    });

   $('.worldly-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.wordly').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $(".charitable-link").click(function() {
        $('.charitable').addClass('active');
    });

    $('.charitable-link[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.charitable').offset().top-0
         }, 500, 'swing', function () {
        });
    });

   $('.charitable-subject[href^="#"]').on('click',function (e) {
        e.preventDefault();


       $('html, body').stop().animate({
            'scrollTop': $('.charitable').offset().top-0
         }, 500, 'swing', function () {
        });
    });

    $('.subject li').click(function() {
    	$(".info").removeClass('info-on');
    	$(this).closest('.subject').addClass('subject-on');

		var id = $(this).attr('data-id');
    	$("#" + id).addClass('info-on');
    });
 
     $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 25) {
            $('.secondary-nav').fadeIn();
            $('.path').fadeOut();
        } else {
            $('.secondary-nav').fadeOut();
            $('.path').fadeIn();
        }
    });

    $('.fixed-nav[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash,
        $target = $(target);

       $('html, body').stop().animate({
            'scrollTop': $target.offset().top-71
         }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });

});
