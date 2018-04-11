SE.form = (function() {
	//PARAMATER

	//INIT
	function init(){
		submitForm()
	}

	//FUNCTION
	function submitForm() {

		$('#submit').on('click', function() {
			var name = $('input[name="name"]').val(),
					email = $('input[name="email"]').val(),
					message = $('input[name="message"]').val();
			if(name !== undefined || email !== undefined || message !== undefined) {
				console.log(name,email,message)
				//$('#form').submit()
			}
			else if (name === undefined) {
				name.addClass('error')
			}
			else if (email === undefined) {
				email.addClass('error')
			}
			else if (message === undefined) {
				message.addClass('error')
			}
		})

	}

	//RETURN
	return {
		init:init
	}
})();
