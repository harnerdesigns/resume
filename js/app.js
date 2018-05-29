
$(".highlight").click(function() {
	if ($(this).hasClass("open")) {
		$(this)
			.children(".highlight__bullets")
			.slideUp();
		$(this).removeClass("open");
		 $(this).find('svg').addClass('fa-caret-down').removeClass('fa-caret-up');
	} else {
		$(this).addClass("open");
					 $(this).find('svg').addClass('fa-caret-up').removeClass('fa-caret-down');
		$(this)
			.children(".highlight__bullets")
			.slideDown();
	}
});
