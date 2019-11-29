/* index.js */

import '../scss/ofotigrid.scss'

require("typeface-vollkorn")

import 'lazysizes'
import 'lazysizes/plugins/bgset/ls.bgset'
import 'lazysizes/plugins/unveilhooks/ls.unveilhooks'
import 'lazysizes/plugins/object-fit/ls.object-fit'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import 'lazysizes/plugins/blur-up/ls.blur-up'
import 'lazysizes/plugins/progressive/ls.progressive'

// --- start, twitterMeta ---

/* detect dark or light mode and handle Twitter embeds accordingly */
var metaTwitterTheme = document.createElement('meta');
var metaTwitterLink = document.createElement('meta');

function catchDark(e) {
  if (e.matches) {
  // dark mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'dark');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#00bbff');
  } else {
    // light mode
    metaTwitterTheme.setAttribute('name', 'twitter:widgets:theme');
    metaTwitterTheme.setAttribute('content', 'light');
    metaTwitterLink.setAttribute('name', 'twitter:widgets:link-color');
    metaTwitterLink.setAttribute('content', '#0033ff');
  }
}

document.getElementsByTagName('head')[0].appendChild(metaTwitterTheme);
document.getElementsByTagName('head')[0].appendChild(metaTwitterLink);

var e = window.matchMedia('(prefers-color-scheme: dark)');
catchDark(e);
e.addListener(catchDark);
// --- end, twitterMeta ---
