Redaction
=========

I missed the point, wildly. Read my [mea culpa](http://justinreese.com/bannerfy). I’m leaving this project alive, but removing the bookmarklet from the project page. You’ll have to do the dirty work yourself.

About
=====

Love [@FilmCritHULK](http://badassdigest.com/author/67)’s incredible essays but keep tripping over the obligatory HULKSPEAK? Tame the beast with the Bannerfy bookmarklet:

```
javascript:(function(){for(var a=document.querySelector("#primary .entry"),b=a.innerHTML,b=b.toLowerCase(),b=b.replace(/(\.)\n/g,"$1[-<br>-]$1 "),b=b.replace(/(\.)\s\n/g,"$1 [-<br>-]$1 "),c=[".","?","!"],i=0;i<c.length;i++)for(var d=c[i]+" ",e=b.split(d),f=e.length,g=0;g<f;g++)e[g]=e[g].replace(e[g].charAt(0),e[g].charAt(0).toUpperCase()),0==g?b=e[g]+d+" ":g!=f-1?b=b+e[g]+d+" ":g==f-1&&(b+=e[g]);b=b.replace(/\[-<br>-\]\.\s/g,"\n");b=b.replace(/\si\s/g," I ");b=b.replace(/\shulk\s/g," Hulk ");a.innerHTML=b;})();
```

Create a bookmark with that “address”, and any time you’re reading a Hulk-sized essay – like [this one](http://badassdigest.com/2013/06/12/film-crit-hulk-smash-the-age-of-the-convoluted-blockbuster/) – click the bookmarklet to Bannerfy the yelling a bit.

Requirements
============

A browser that supports `document.querySelector()`.

Author
======

Bannerfy was written by Justin Reese (http://justinreese.com, http://github.com/reefdog, http://twitter.com/reefdog) based on code found at http://www.textfixer.com/tools/capitalize-sentences.php.

Copyright
=========

Copyright 2013 Justin Reese (justinreese.com)

Licensed under the Apache License, Version 2.0 (the “License”); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an “AS IS” BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
