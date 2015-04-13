$(function() {

    $(".activity").click(function() {
		$(this).closest(".parentselect").toggleClass("active");
    });

    $('li').hover(function() {
    	$(this).toggleClass("li-hover");
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
