import mixitup from 'mixitup'
SE.filter = (function() {
	//PARAMATER

	//INIT
	function init(){
    main_animate();
	}

	//FUNCTION
  function main_animate() {
    var containerEl = $('.filter--content');
    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)' // Set a 'stagger' effect for the loading animation
        },
        load: {
            filter: '.filter--content .all' // Ensure all targets start from hidden (i.e. display: none;)
        }
    });

    // Add a class to the container to remove 'visibility: hidden;' from targets. This
    // prevents any flickr of content before the page's JavaScript has loaded.

    //containerEl.classList.add('mixitup-ready');

    // Show all targets in the container
    mixer.show()
        .then(function() {
            // Remove the stagger effect for any subsequent operations

            mixer.configure({
                animation: {
                    effects: 'fade scale'
                },
								/*callbacks: {
				            onMixEnd: function(state){
				                masonry(); // ******* here call masonry function

				            }
				        }*/
            });
        });
  }

	//RETURN
	return {
		init:init,
		main_animate:main_animate
	}
})();
