import validate from 'jquery-validation'
SE.form = (function() {
	//PARAMATER

	//INIT
	function init(){
		var id = $('#contact-form')
		submitForm(id)
		submitClick(id)
	}

	function submitClick(form) {
		
		$('#submit').on('click', function() {
			if(form.valid() == true) {
				form.submit()
				$('#myModal').one('shown.bs.modal', function (e) {
		        $('input,textarea').val("");
		    }).modal('show');
			}

			else {
				//alert('error')
			}
		})
	}

	//FUNCTION
	function submitForm(id) {
		$(id).validate({
			rule: {
				name: "required",
	      email: {
		      required: true,
		      email: true
		    }
			},
			highlight: function (element, errorClass) {
        $(element).closest('.form-group').addClass('has-error');
	    },
	    unhighlight: function (element, errorClass) {
	        $(element).closest('.form-group').removeClass('has-error');
	    },
			messages: {
		    name: "Vui lòng nhập đầy đủ họ tên.",
		    email: {
		      required: "Tôi cần địa chỉ email của bạn để liên lạc lại.",
		      email: "Địa chỉ email của bạn cần đúng định dạng: example@gmail.com."
		    }
		  },
			// Make sure the form is submitted to the destination defined
	    // in the "action" attribute of the form when valid
	    submitHandler: function(form) {

					$.ajax({
						url: 'mailer.php',
						type: 'POST',
						data: $('#contact-form').serialize(),
	          cache: false,
	          processData: false,
						success: function(data) {
							console.log(data)
						}
					})
				}
		})
		$('#submit').on('click', function() {
				console.log("Valid: " + $('#contact-form').valid())
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
