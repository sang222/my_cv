// JavaScript Document
var SiteMain = (function() {

	var setting = {
	   font: 10,
	   w: 1170,
   }
	var rtime;
	var isDragging = false;
	var startingPos = [];
	var oldX;
	function init(){
		homeCarousel();
        openMiniCart();
		signUpEvent();
		carousel_3d();

		$('.signUpFree a.close').click(function(){
			$('.signUpFree').hide();
			var topH = $('header.navbar-fixed-top .navbar').innerHeight()
			$('.paddingBody').attr('style', 'margin-top:' + topH + 'px!important');
		})
		var topH = $('header.navbar-fixed-top .navbar').innerHeight() + $('.signUpFree').innerHeight()
		$('.paddingBody').attr('style', 'margin-top:' + topH + 'px!important');

		$(window).resize(function(){
			clearTimeout(rtime);
		     rtime = setTimeout(function(){
				 $('.portfolio-controllers a.active-filter').trigger('click')
	 			var topH = $('header.navbar-fixed-top .navbar').innerHeight() + $('.signUpFree').innerHeight()
	 			$('.paddingBody').attr('style', 'margin-top:' + topH + 'px!important');
			}, 300);

		})
		if($('body').hasClass('home')) {
			//if(localStorage.getItem("openWelcome") == null) {
				respone();
				//$('.welcomeBox').height($(window).height()- $('header nav').height())
				$(window).resize(function(e) {
					//$('.welcomeBox').height($(window).height()- $('header nav').height())
				   respone();
				});
				if($('.welcomeBox').length > 0){
					$('body').addClass('overflowHidden')

				}
				animateHome();
			// } else {
			// 	$('.welcomeBox').hide()
			// }
			$(window).mousewheel(function(turn, delta) {

			  if (delta == 1) {
				  console.log('up')

			  } // going down
			  else { //going up
				  $('.welcomeBox').animate({height:0},100, function(){
 				   $('.welcomeBox').css('margin-top',0)
 				   $('body').removeClass('overflowHidden')
				   setTimeout(function() {
				        $('.welcomeBox').css('display','none')
				    }, 1000);

 			   });
			  }
			});
		} else {
			$('.welcomeBox').hide()
		}
		filterShop('.shop-filter')
		//initFilterProduct('.shop-filter', 4)
	}

	function quickViewProduct(productID) {
		openPopup('#viewProduct');
		Main.loadPopupProduct(productID);
	}


	function homeCarousel() {
		$("#main-slide").swipe({
		  swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
		    if (direction == 'left') $(this).carousel('next');
		    if (direction == 'right') $(this).carousel('prev');
		  },
		  allowPageScroll:"vertical"
		});
	}

    var miniCartTimeout;
    function openMiniCart(){
//        $('.cartIcon').mouseover(function(){
//            $('#mini_cart_outer').addClass('animateRight')
//        });
        $('#mini_cart_outer #miniCart .miniCartPopout .miniCartTitle .hideCart').click(function(){
             $('#miniCart').fadeOut( 300 );
        })
        $(document).on('mouseenter mouseleave touchend touchstart' , '.cartIcon' , function(e){
            e.preventDefault();
            e.stopPropagation();

            if ( e.type == 'mouseenter' || e.type == 'touchstart' ) {
                $('#miniCart').fadeIn( 300 );
                clearTimeout( miniCartTimeout );
            } else if ( e.type == 'mouseleave' || e.type == 'touchend' ) {
                miniCartTimeout = setTimeout( function(){
                    $('#miniCart').fadeOut( 300 );
                } , 3000 );
            }

        });
        $(document).on( 'mouseenter mouseleave touchend touchstart' , '#miniCart' , function(e) {
            //e.preventDefault();
            e.stopPropagation();

            if ( e.type == 'mouseenter' || e.type == 'touchstart' ) {
                clearTimeout( miniCartTimeout );
            } else if ( e.type == 'mouseleave' || e.type == 'touchend' ) {
                miniCartTimeout = setTimeout( function(){
                    $('#miniCart').fadeOut( 300 );
                } , 3000 );
            }

        });
    }


	function filterShop(ele) {
		$(document).ready(function() {
		  $('.shop-controllers a.filter-btn').click(function() {
		    // fetch the class of the clicked item
		    var ourClass = $(this).attr('data-filter');
		    // reset the active class on all the buttons
		    $('.shop-controllers a.filter-btn').removeClass('active-filter');
		    // update the active state on our clicked button
		    $(this).addClass('active-filter');
		    if(ourClass == 'all') {
		      // show all our items
		     $('.shop-filter').children('div[class^="tk-filter"]:not(.' + ourClass + ')').hide();
			 $('.shop-filter').children('div.products_page-item ').fadeIn();
			 $('.shop-filter').children('div.tk-filter.all').fadeIn();

		    }
		    else {
		    	console.log(ourClass);
		      // hide all elements that don't share ourClass
		      $('.shop-filter').children('div:not(.' + ourClass + ')').hide()
		      $('.shop-filter').children('div[class^="tk-filter"]:not(.' + ourClass + ')').hide();
		      // show all elements that do share ourClass
		      $('.shop-filter').children('div.' + ourClass).fadeIn();
		    }
		    return false;
		  });
		});
	}


	function animateHome(){
		$('a.arrowWelcome ').click(function(){
			$('.welcomeBox').animate({height:0},100, function(){
				$('.welcomeBox').css('margin-top',0)
				$('body').removeClass('overflowHidden')
				setTimeout(function() {
					 $('.welcomeBox').css('display','none')
				 }, 1000);
			});
			localStorage.setItem("openWelcome", true);
		});
	}

	function respone() {
		if($(window).width() < 1171) {
	        setting.font = ($(window).width() * 10) / setting.w;
	        if ($('html').hasClass('ie8'))
	            setting.font = Math.round(setting.font);
	        $('body, .welcomeBox').css('font-size', setting.font + 'px');
		}
    }

	var separation = 230;
	var sizeMultiplier = 0.9;
	var flankingItems = 3;
	if($(window).width() < 640) {
		separation = 90
		flankingItems = 2
	} else if($(window).width() > 992 && $(window).width() <=1024) {
		separation = 160
		flankingItems = 2
	}
	function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
    }

	function signUpEvent(){
		$('.signupBox .btn-button').click(function(){
		    var email = $('#email').val();
		    if(!email || email=='undefined' || !validateEmail(email)){
		    	 alert('Invalid email address');
		    }else{
			  $('#signUp').css({'visibility':'visible','display':'block'});
			  $('#email-mailchimp').val(email);
		    }
			if($("#checkAll").is(":checked")) {
	            $(".checkBoxContainer input:checkbox").prop('checked', true);
	        }
			//return false;
		});
		$('.signup .overlaywhite').click(function(){
			$('#signUp').css({'visibility':'hidden','display':'none'});
		});
	}
	function openPopupContent(idDiv){
		$('.cd-quick-view').css('display','none')
		$('.group-poup').css('display','block')
		$('body').addClass('overHidden')
		$('#popup-content-' + idDiv).css({'visibility':'visible','display':'block'});
	}
	function closePopupContent(idDiv){
		$('.cd-quick-view').css('display','none')
		$(idDiv).css({'visibility':'hidden','display':'none'});
	}

	function openPopup(idDiv){
		$('.cd-quick-view').css('display','none')
		$('.group-poup').css('display','block')
		//$(idDiv).css('margin-top',($(window).scrollTop() + 50) + "px");
		$(idDiv).css({'visibility':'visible','display':'block'});
	}
	function closePopup(idDiv){
		$('.group-poup').css('display','none')
		$('body').removeClass('overHidden')
		$(idDiv).css({'visibility':'hidden','display':'none'});
	}
	var carouselT;
	function onDragLeftOrRight(carousel) {
		$(".carousel-item")
		    .mousedown(function (evt) {
		        isDragging = false;
		        startingPos = [evt.pageX, evt.pageY];
				oldX = evt.pageX
				if(evt.target.tagName.toLowerCase() == 'img') {
				    return false;
				}
		    })
		    .mousemove(function (evt) {
		        if (!(evt.pageX === startingPos[0] && evt.pageY === startingPos[1])) {
		            isDragging = true;
		        }
		    })
		    .mouseup(function (evt) {
				startingPos = [evt.pageX, evt.pageY];
				console.log('oldX ' + oldX)
				console.log('evt.pageX ' + evt.pageX)
				if(oldX > evt.pageX ) {
					 console.log("Drag Left");
					carousel.next();
				} else if(oldX < evt.pageX){
					console.log("Drag Right");

					  carousel.prev();
				}
		        isDragging = false;
		        startingPos = [];
		    });
	}
	function touchCarousel(carousel) {
		$(".carousel-item").swipe( {
	    swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
		  if(direction == 'right') {
			   carousel.prev();
		  } else if(direction == 'left')  {
			 carousel.next();
		  }
	  },
	  allowPageScroll:"vertical"
	  });
	}
	function carousel_3d() {
		$(window).resize(function(){
			clearTimeout(carouselT);
		     carouselT = setTimeout(function(){
				 var separation = 230;
	 			var sizeMultiplier = 0.9;
	 			var flankingItems = 3;
	 			if($(window).width() < 640) {
	 				separation = 140
	 				flankingItems = 2
	 			} else if($(window).width() > 992 && $(window).width() <=1024) {
	 				separation = 160
	 				flankingItems = 2
	 			}

			}, 300);

		})
		var options = {
			flankingItems: flankingItems,
			separation: separation,
			sizeMultiplier: sizeMultiplier,
			opacityMultiplier: 1,
			currentDirection: 'forward',
			autoPlay: 3000,
			clickedCenter: function($clickedItem) {
		      // $clickedItem is a jQuery wrapped object describing the image that was clicked.
			  var productID = $($clickedItem).attr('data-id');
			  openPopup('#viewProduct');
			  Main.loadPopupProduct(productID);
		    }
		}
		var carousel = $("#carousel1").waterwheelCarousel(options)
		onDragLeftOrRight(carousel)
		touchCarousel(carousel)

		$('.prev').bind('click', function () {
          carousel.prev();
        });

		$(window).resize(function(){
			carousel.reload(options)
		})

        $('.next').bind('click', function () {
          carousel.next();
        });

	}

	return {
		init:init,
		openPopup:openPopup,
		closePopup:closePopup,
		quickViewProduct:quickViewProduct,
		openPopupContent:openPopupContent
	}

})();

$(document).ready( function() {
	SiteMain.init();
});

// Page Loader
$(window).load(function () {
    "use strict";
	$('#loader').fadeOut();

	$('.carousel-item').each(function(item){
		//console.log($(this))
		if($(this).hasClass('active')) {
			console.log(123)
		}
	})
});
