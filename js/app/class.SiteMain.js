var SiteMain = (function() {
	//PARAMATER

	//INIT
	function init(){
		home.init();
		page.init();
		filter.init();
		scrollbar()
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

	//RETURN
	return {
		init:init
	}
})();

$(document).ready( function() {
	SiteMain.init();
});
