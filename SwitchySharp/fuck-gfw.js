function FindProxyForURL(url, host) {  
	var url = url.toLowerCase();
	var host = host.toLowerCase();

	switch (true) {
		case shExpMatch(host, '(*\.|)google.com'):
		case shExpMatch(host, '(*\.|)facebook.com'):
			return "HTTPS s01.luozhucheng.info:3269; HTTPS s06.luozhucheng.info:3269; ";
			break;
		default:
			return 'DIRECT';
	}
}
