// get the tab from url
		var hash = window.location.hash;
    	// if a hash is present (when you come to this page)
    	
    	if (hash !='') {
        	// show the tab
        	$('.nav-tabs a[href="' + hash + '"]').tab('show');
        	var show= $(hash);
        	if(hash=='#saved-tab'){
        		console.log('hey');
        		var active=$('a[href="#saved-tab"]');
        		$('.nav-link').removeClass('active');
        		$('.tab-pane').removeClass('active show');
        	}
        	active.addClass('active');
    		// active.click();
    		show.addClass('show active');
    		hash='';
    		window.history.replaceState({}, document.title, "dabai/account-page.php/" + "");
    	}
