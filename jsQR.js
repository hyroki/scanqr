/*
jsQR loader placeholder.
This file is intentionally small: it will try to detect whether a full jsQR implementation
is available (for offline use, you can download jsQR and replace this file).

If you want 100% offline, download jsQR and put its contents here (rename to jsQR.js).
Download link (online): https://github.com/cozmo/jsQR

This small loader will attempt to load the CDN copy when online.
*/
(function(){
  // if jsQR already present, do nothing
  if(window.jsQR) return;
  // try to fetch CDN version dynamically (works if online)
  var s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/jsqr/dist/jsQR.js';
  s.crossOrigin = 'anonymous';
  s.onload = function(){ console.log('jsQR loaded from CDN'); };
  s.onerror = function(){ console.warn('Failed to load jsQR from CDN. For offline use, download jsQR and place full library into this file.'); };
  document.head.appendChild(s);
})();
