document.write(
  unescape(
    "%3Ciframe%20name%3D%22testIframeName%22%20style%3D%22display%3Anone%3B%22%3E%3C/iframe%3E"
  )
);

eval(
  (function(p, a, c, k, e, r) {
    e = String;
    if ("0".replace(0, e) == 0) {
      while (c--) r[e(c)] = k[c];
      k = [
        function(e) {
          return r[e] || e;
        }
      ];
      e = function() {
        return "[134]";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    'function checkaction(v){if(v==0){3.1.4="Post_1.asp"}else{3.1.4="Post_1.asp"}1.submit()}',
    [],
    5,
    "|register||document|action".split("|"),
    0,
    {}
  )
);
