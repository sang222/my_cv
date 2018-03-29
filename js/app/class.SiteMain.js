var SiteMain = (function() {
	//PARAMATER
	setting = {
		swiper: null
	}

	//INIT
	function init(){
		home.init();
		page.init();
		filter.init();
		scrollbar()
		open_nav_mobile()
		open_popup()
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

function open_popup() {
	$('.open_popup').on('click', function() {
		$('body').addClass('popup-opening')
		$('.filter-content__popup').show()
		create_slider()
	})
}

function close_popup() {
	$('body').removeClass('popup-opening')
	$('.filter-content__popup').hide()
	destroy_slider()
}

function create_slider() {
	setting.swiper = new Swiper('.swiper-container', {
		effect: 'flip',
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
	}

	function destroy_slider() {
		if ( setting.swiper !== undefined ) setting.swiper.destroy( true, true );
	}

	//RETURN
	return {
		init:init,
		close_popup:close_popup
	}
})();

$(document).ready( function() {
	SiteMain.init();
});
