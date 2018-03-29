SE.SiteMain = (function() {
	//PARAMATER

	//INIT
	function init(){
		SE.home.init();
		SE.page.init();
		SE.filter.init();
		scrollbar()
		open_nav_mobile()
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

$(document).ready( function() {
	SE.SiteMain.init();
});
