$(".input-code input").keyup(function () {
		$(this).next().focus();
	});
	$(".step02 .input-code input:last-child").keyup(function () {
		$(".step02 button").focus();
	});
