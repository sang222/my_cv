var page = (function() {
	//PARAMATER
  setting = {
    tl: null,
    page: '',
    id: '',
    tl2: null
  }

	//INIT
	function init(){
    animate_page();
    switch_page();
	}

	//FUNCTION
  function animate_page() {
    setting.tl = new TimelineMax({paused: true})
    var w_left = $('.page-content__left').width(), w_right = $('.page-content__right').width();
    //console.log(w_left,w_right);
    setting.tl.set('body',{css:{className: '-=fullscreen'}, onComplete: function() {
      setting.tl.to('.page-content', 0.1, {opacity: 1, scale: 1, 'z-index': 99});
      setting.tl.to('.page-content__left', 0.8, {left: 0}, -0.3);
      setting.tl.to('.page-content__right', 0.8, {right: 0}, -0.05);
      setting.tl.set('.main-page',{opacity: 0, delay: 0.5})
    }})

  }

  function revert() {
    setting.tl.reverse()
  }



  function switch_page() {
    $('.wrapper').on('click', '.switch-page', function() {
      //window.location.hash = setting.id
      //alert(location.hash)
      setting.id = $(this).attr('goto')
      setting.page = $('.wrapper .section-content').map(function(){
        return $(this).attr('page');
      }).get()
      //console.log(setting.page, setting.id);

      var check = (_.some(setting.page, function (el) {
        return _.includes(setting.id, el);
      }))
      //console.log(check);

      if (check == true) {
        $('body').removeClass()
        $('body').addClass('active-'+setting.id+' wrapper')
        //console.log($('section[page='+ setting.id +']'));
        $('section.section-content').hide();
        $('section[page='+ setting.id +']').show()

        setting.tl.play();
        if (setting.id == 'resume') {
          setTimeout(function(){ process_bar() }, 500);
        }

      }
    })
  }

  function closepage_main() {
    setting.tl2 = new TimelineMax({paused: false})
    var w = parseInt('-1000px');
    setting.tl2.to('section.section-content', .5, {scale: 0.5, opacity: 0})
    //setting.tl2.set('section.section-content', {scale: 1, opacity: 0, right: w})
  }

  function open_page(page) {
      $('.section-content').hide();
      $('.section-content[page='+page+']').show();
  }

  function process_bar() {
    $(".progress-bar-blue").each(function(){
      var percentage = $(this).attr('process');
      if(percentage > 0){
        $(this).animate({'width':''+percentage+'%'}, 800);
      }else{
        $(this).css({'color':'black', 'background':'none'}, 800);
      }
    })

  }

	//RETURN
	return {
		init:init,
    open_page:open_page,
    revert:revert,
    closepage_main:closepage_main
	}
})();
