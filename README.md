About
=====

Love [@FilmCritHULK](http://birthmoviesdeath.com/author/film.crit.hulk)’s incredible essays but keep tripping over the obligatory HULKSPEAK? Tame the beast with the Bannerfy bookmarklet:

```
javascript:(function(){var a=document.querySelector(".Article-content");if(a){for(var b=a.innerHTML,b=b.toLowerCase(),b=b.replace(/(\.)\n/g,"$1[-<br>-]$1 "),b=b.replace(/(\.)\s\n/g,"$1 [-<br>-]$1 "),c=[".","?","!"],d=0;d<c.length;d++)for(var e=c[d]+" ",f=b.split(e),g=f.length,h=0;h<g;h++)f[h]=f[h].replace(f[h].charAt(0),f[h].charAt(0).toUpperCase()),0==h?b=f[h]+e+" ":h!=g-1?b=b+f[h]+e+" ":h==g-1&&(b+=f[h]);b=b.replace(/\[-<br>-\]\.\s/g,"\n");b=b.replace(/\si\s/g," I ");b=b.replace(/\shulk\s/g," Hulk ");a.innerHTML=b};})();
```

Create a bookmark with that “address”, and any time you’re reading a Hulk-sized essay – like [this one](http://birthmoviesdeath.com/2013/06/12/film-crit-hulk-smash-the-age-of-the-convoluted-blockbuster) – click the bookmarklet to Bannerfy the yelling a bit.

Requirements
============

A browser that supports `document.querySelector()`.

Author
======

Bannerfy was written by Justin Reese (https://justinreese.com, http://github.com/reefdog, http://twitter.com/reefdog) based on code found at http://www.textfixer.com/tools/capitalize-sentences.php.

License
=========

Copyright 2013 Justin Reese (justinreese.com)

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
