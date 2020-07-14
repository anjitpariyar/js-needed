function goBack() {
	if (document.referrer == "") {
		window.location.href='./index.php';
	}
  	else {
		window.history.back();
	}
}
