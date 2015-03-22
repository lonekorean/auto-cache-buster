window.addEventListener('keydown', function(e) {
	if (e.keyCode === 116 || (e.ctrlKey && e.keyCode === 82)) { // f5 or ctrl + r
		// parse URL
		var split = window.location.href.split('#');
		var url = split[0];
		var hash = split[1];

		// set cache-busting query string param
		var pair = 'cachebuster=' + Date.now();
		if (url.indexOf('cachebuster=') > -1) {
			url = url.replace(/cachebuster=\d+/, pair);
		} else {
			url += (url.indexOf('?') > -1 ? '&' : '?') + pair;
		}

		// reassemble
		var final = url + (hash ? '#' + hash : '');
		window.location.href = final;

		e.preventDefault();
	}
});
