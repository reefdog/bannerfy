/*
========================================================================
bannerfy.js
Love @FilmCritHULK's incredible essays but keep tripping over the
obligatory HULKSPEAK? Tame the beast with the Bannerfy bookmarklet.
Like Banner, it's not perfect, but it's better than the alternative.
JavaScript taken from http://bit.ly/al5qDV but heavily modified.

Compatible with any browser that supports `document.querySelector()`.
========================================================================
Copyright 2013 Justin Reese (justinreese.com)

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
========================================================================
*/

var article = document.querySelector('.Article-content');
if (article) {
  var content = article.innerHTML;

  content = content.toLowerCase();
  content = content.replace(/(\.)\n/g,"$1[-<br>-]$1 ");
  content = content.replace(/(\.)\s\n/g,"$1 [-<br>-]$1 ");

  var splitters = ['.', '?', '!'];
  for (var i = 0; i < splitters.length; i++) {
    var splitter     = splitters[i] + ' ';
    var sentences    = content.split(splitter);
    var sentence_len = sentences.length;
    for (var x = 0; x < sentence_len; x++) {
      sentences[x] = sentences[x].replace(sentences[x].charAt(0), sentences[x].charAt(0).toUpperCase());

      if (x == 0) {
        content = sentences[x] + splitter + ' ';
      }
      else if (x != sentence_len-1) {
        content = content + sentences[x] + splitter + ' ';
      }
      else if (x == sentence_len-1) {
        content = content + sentences[x];
      }
    }
  }

  content = content.replace(/\[-<br>-\]\.\s/g,"\n");
  content = content.replace(/\si\s/g, ' I ');
  content = content.replace(/\shulk\s/g, ' Hulk ');

  article.innerHTML = content;
}
