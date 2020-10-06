// update image change
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function(e) {
					$('#ppImage').attr('src', e.target.result);
				}
				reader.readAsDataURL(input.files[0]); 
    			// convert to base64 string
    		}
    	}

    	$("#ppImageInput").change(function() {
    		readURL(this);
    	});
