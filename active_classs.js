const currentLocation = location.href;
	// console.log(currentLocation);
	const menuItem = $('.main-nav .nav .nav-link');
	const menuLength = menuItem.length;
	for (let i = 0; i < menuLength; i++) {
		if (menuItem[i].href === currentLocation) {
			console.log(menuItem[menuItem[i].href]);
			menuItem[i].classList.add('active')
		}
	}
