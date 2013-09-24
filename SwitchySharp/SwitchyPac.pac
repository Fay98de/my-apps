function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
	if (shExpMatch(url, "*.appspot.*") || shExpMatch(url, "*://appspot.*")) return 'DIRECT';
	if (shExpMatch(url, "*.feedly.*") || shExpMatch(url, "*://feedly.*")) return 'DIRECT';
	if (shExpMatch(url, "*.google.*") || shExpMatch(url, "*://google.*")) return 'DIRECT';
	if (shExpMatch(url, "*.googleapi.*") || shExpMatch(url, "*://googleapi.*")) return 'DIRECT';
	if (shExpMatch(url, "*.googleusercontent.*") || shExpMatch(url, "*://googleusercontent.*")) return 'DIRECT';
	if (shExpMatch(url, "*.gstatic.*") || shExpMatch(url, "*://gstatic.*")) return 'DIRECT';
	if (shExpMatch(url, "*.sourceforge.*") || shExpMatch(url, "*://sourceforge.*")) return 'DIRECT';
	if (shExpMatch(url, "*chrome.blogspot.com*")) return 'DIRECT';
	if (shExpMatch(url, "*spinejs.com*")) return 'DIRECT';
	if (shExpMatch(url, "*.vimeo.*") || shExpMatch(url, "*://vimeo.*")) return 'DIRECT';
	return 'DIRECT';
}