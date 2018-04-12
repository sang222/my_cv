import validate from 'jquery-validation'
SE.form = (function() {
	//PARAMATER

	//INIT
	function init(){
		var id = $('#form')
		submitForm(id)
		submitClick(id)
	}

	function submitClick(form) {
		$('#submit').on('click', function() {
			if(form.valid() == true) {
				form.submit()
			}
			else {
				alert('error')
			}
		})
	}

	//FUNCTION
	function submitForm(id) {
		$(id).validate({
			rule: {
				name: "required",
	      email: "required",
				message : "required"
			},
			highlight: function (element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
	    },
	    unhighlight: function (element, errorClass) {
	        $(element).closest('.form-group').removeClass('has-error');
	    },
			// Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {
				console.log('aaaa')
				$.ajax({
					url: './mailer.php',
					type: 'POST',
					data: new FormData($(form)),
          cache: false,
          processData: false,
					success: function(data) {
						console.log(data)
					}
				})
			}
		})
		$('#submit').on('click', function() {
				console.log("Valid: " + $('#form').valid())
				$(id).validate().element('input[type="text"]')
				$(id).validate().element('input[type="email"]')
				$(id).validate().element('textarea')
		})
	}

	//RETURN
	return {
		init:init
	}
})();
