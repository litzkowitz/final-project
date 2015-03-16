$(function() {
    $(".sporty").click(function() {
		$(this).addClass("active");
    });

    $('li').hover(function() {
    	$(this).toggleClass("li-hover");
    });

    $('.subject li').click(function() {
    	$(".info").removeClass('info-on');
    	$(this).closest('.subject').addClass('subject-on');

		var id = $(this).attr('data-id');
    	$("#" + id).addClass('info-on');
    });
});
