var SiteMain = (function() {
	//PARAMATER

	//INIT
	function init(){
		home.init();
		page.init();
	}

	//FUNCTION

	//RETURN
	return {
		init:init
	}
})();

$(document).ready( function() {
	SiteMain.init();
});
