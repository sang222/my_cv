var page = (function() {
	//PARAMATER
  setting = {
    tl: null
  }

	//INIT
	function init(){
    animate_page();
    active_page();
    switch_page();
	}

	//FUNCTION
  function animate_page() {
    setting.tl = new TimelineMax({paused: true})
    var w_left = $('.page-content__left').width(), w_right = $('.page-content__right').width();
    //console.log(w_left,w_right);
    setting.tl.to('.page-content', 0.1, {opacity: 1, scale: 1, 'z-index': 99});
    setting.tl.to('.page-content__left', 0.8, {left: 0}, -0.3);
    setting.tl.to('.page-content__right', 0.8, {right: 0}, -0.05);
  }

  function active_page() {
    $('.about').on('click', function() {
      setting.tl.play()
      $('body').removeClass('fullscreen');
      $('.main-page').delay(900).queue(function (next) {
        $(this).css('opacity', 0);
        next();
      });
    })

  }

  function switch_page() {

    $('.wrapper').on('click', '.switch-page', function() {
      console.log($('.page-content__right--content section').attrs('page'))
      var id = $(this).attr('goto');
      window.location.hash = id
      //alert(location.hash)
      var page = $('.wrapper .section-content').attr('page')
      console.log(page, id);

      if (window.location.hash == page) {
        console.log(window.location.href)
        $('section[page='+ page +']').show();
      }

      if (page == id) {
        console.log($('section[page='+ page +']'));
        $('body').addClass(page)
        $('.section-content').hide();
        $('section[page='+ page +']').show();
      }
      else {
        $('.section-content').hide();
      }
    })
  }

	//RETURN
	return {
		init:init
	}
})();
