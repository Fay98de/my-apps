function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.appspot.*") || shExpMatch(url, "*://appspot.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.chrome.*") || shExpMatch(url, "*://chrome.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*://daneden.me/*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.feedly.*") || shExpMatch(url, "*://feedly.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*git-scm.com*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.google.*") || shExpMatch(url, "*://google.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.googleapi.*") || shExpMatch(url, "*://googleapi.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.googleusercontent.*") || shExpMatch(url, "*://googleusercontent.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.googlevideo.*") || shExpMatch(url, "*://googlevideo.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.greatfire.org*") || shExpMatch(url, "*://greatfire.org*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.gstatic.*") || shExpMatch(url, "*://gstatic.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.sourceforge.*") || shExpMatch(url, "*://sourceforge.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*chrome.blogspot.com*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*spinejs.com*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*://javascriptmvc.com/*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.vimeo.*") || shExpMatch(url, "*://vimeo.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.youtube.*") || shExpMatch(url, "*://youtube.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*.ytimg.*") || shExpMatch(url, "*://ytimg.*")) return 'SOCKS5 127.0.0.1:7070';
	if (shExpMatch(url, "*stackoverflow.*")) return 'SOCKS5 127.0.0.1:7070';
	return 'DIRECT';
}