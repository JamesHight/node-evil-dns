Evil DNS
========

Override the IP address returned for one or more domains.

Note: This module modifies the core DNS library's lookup function.

Installation
------------

````bash
npm install evil-dns
````

Usage
-----

````javascript
var evilDns = require('evil-dns');

// String match
evilDns.add('foo.com', '1.2.3.4');
// String with wild cards
evilDns.add('*foo.*', '1.2.3.4');
// RegExp match
evilDns.add(/^foo\.bar\..*$/i, '1.2.3.4');

// Remove domain entry
evilDns.remove('*foo.*','1.2.3.4');

// Remove domain by matching the RegExp source attributes
// When no ip is passed any entry matching the domain will be removed
evilDns.remove(/^foo\.bar\..*$/i);

// Remove all domain entries
evilDns.clear();
````
