SE.home = (function() {
	//PARAMATER

	//INIT
	function init(){
    animate_avatar();
	}

	//FUNCTION
  function animate_name() {
    var split;
    split = new SplitText(".name", {type:"chars", charsClass:"word", repeat: -1});

    TweenMax.set(".word", {autoAlpha:0});
    TweenMax.staggerFromTo( split.chars, 0.34, {autoAlpha:0, scale:2.2, onStart:function(){
      $(".name").css({"opacity":1});
    }}, {autoAlpha:1, scale:1}, 0.3 );
  }

  function animate_avatar() {
    var tl = new TimelineMax();
    tl.fromTo('.main-page .circle', 1, {scale: 2, ease: Bounce.easeOut, x: '-50%', y: '-50%'}, {scale: 1, ease: Bounce.easeOut, x: '-50%', y: '-50%'})
  }
	//RETURN
	return {
		init:init
	}
})();
