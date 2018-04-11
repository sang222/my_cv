
SE.SiteMain = (function() {
	//PARAMATER
	var setting = {
		swiper: null
	}

	//INIT
	function init(){
		scrollbar()
		open_nav_mobile()
		open_Popup()
	}

	//FUNCTION
	function scrollbar() {
		var scroll = [];
		$('.section-content').each(function(index, element){
			$(this).addClass('slide-'+index);
			var scrollbar = $('.slide-'+index).mCustomScrollbar({
				'theme': 'dark',
				'scrollInertia': 0,
        'live': true,
				'autoHideScrollbar': true
			});
			scroll.push(scrollbar);
		});
}

	function open_Popup() {
	$('.open_popup').on('click', function() {
		$('body').addClass('popup-opening')
		$('.filter-content__popup').show()
	})
}

function open_nav_mobile() {
	$('.nav-mobile i').on('click', function() {
		$('.nav-mobile .page-content__right--nav').toggleClass('active')
	})
}

	//RETURN
	return {
		init:init
	}
})();
