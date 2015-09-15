/*
 * https://www.npmjs.com/package/system-script
 * system.js plugin to load an import via a script tag instead of a XHR request which avoid CORS issues
 * */
'use strict';
exports.locate = function(load) {
  var name = load.name.replace(/^(https?:)?\/\//, '');
  return window.location.protocol + '//' + name;
};

exports.fetch = function(load) {
  return new Promise(function(resolve, reject) {
    var head = document.getElementsByTagName('head')[0];
    var s = document.createElement('script');
    s.async = true;

    function complete(/*evt*/) {
      if (s.readyState && s.readyState !== 'loaded' && s.readyState !== 'complete'){
        return;
      }
      cleanup();
      resolve('');
    }

    function error(evt) {
      cleanup();
      reject(evt);
    }

    if (s.attachEvent) {
      s.attachEvent('onreadystatechange', complete);
    }
    else {
      s.addEventListener('load', complete, false);
      s.addEventListener('error', error, false);
    }

    s.src = load.address;
    head.appendChild(s);

    function cleanup() {
      if (s.detachEvent){
        s.detachEvent('onreadystatechange', complete);
      }
      else {
        s.removeEventListener('load', complete, false);
        s.removeEventListener('error', error, false);
      }
      head.removeChild(s);
    }
  });
};
