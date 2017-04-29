//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(...args) {
  var n=this;
  var t=n._;
  var r={};
  var e=Array.prototype;
  var u=Object.prototype;
  var i=Function.prototype;
  var a=e.push;
  var o=e.slice;
  var c=e.concat;
  var l=u.toString;
  var f=u.hasOwnProperty;
  var s=e.forEach;
  var p=e.map;
  var v=e.reduce;
  var h=e.reduceRight;
  var d=e.filter;
  var g=e.every;
  var m=e.some;
  var y=e.indexOf;
  var b=e.lastIndexOf;
  var x=Array.isArray;
  var _=Object.keys;
  var w=i.bind;
  var j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};
  "undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=(n, t, e) => {if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=(n, t, r) => {var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,(n, u, i) => {e.push(t.call(r,n,u,i))}),e);};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,(n, i, a) => {u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,(o, c, l) => {c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=(n, t, r) => {var e;return O(n,(n, u, i) => t.call(r,n,u,i)?(e=n,!0):void 0),e;},j.filter=j.select=(n, t, r) => {var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,(n, u, i) => {t.call(r,n,u,i)&&e.push(n)}),e);},j.reject=(n, t, r) => j.filter(n,(n, e, u) => !t.call(r,n,e,u),r),j.every=j.all=(n, t, e) => {t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,(n, i, a) => (u=u&&t.call(e,n,i,a))?void 0:r),!!u);};var O=j.some=j.any=(n, t, e) => {t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,(n, i, a) => u||(u=t.call(e,n,i,a))?r:void 0),!!u);};j.contains=j.include=(n, t) => null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,n => n===t),j.invoke=function(n,t){
    var r=o.call(arguments,2);
    var e=j.isFunction(t);
    return j.map(n,n => (e?t:n[t]).apply(n,r));
  },j.pluck=(n, t) => j.map(n,n => n[t]),j.where=(n, t, r) => j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,n => {for(var r in t)if(t[r]!==n[r])return!1;return!0}),j.findWhere=(n, t) => j.where(n,t,!0),j.max=(n, t, r) => {if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max(...n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,(n, u, i) => {var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value;},j.min=(n, t, r) => {if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min(...n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,(n, u, i) => {var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value;},j.shuffle=n => {
    var t;
    var r=0;
    var e=[];
    return A(n,n => {t=j.random(r++),e[r-1]=e[t],e[t]=n}),e;
  };var F=n => j.isFunction(n)?n:t => t[n];j.sortBy=(n, t, r) => {var e=F(t);return j.pluck(j.map(n,(n, t, u) => ({
    value:n,
    index:t,
    criteria:e.call(r,n,t,u)
  })).sort((n, t) => {
    var r=n.criteria;
    var e=t.criteria;
    if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1
  }),"value");};var k=(n, t, r, e) => {
    var u={};
    var i=F(null==t?j.identity:t);
    return A(n,(t, a) => {var o=i.call(r,t,a,n);e(u,o,t)}),u;
  };j.groupBy=(n, t, r) => k(n,t,r,(n, t, r) => {(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.countBy=(n, t, r) => k(n,t,r,(n, t) => {j.has(n,t)||(n[t]=0),n[t]++}),j.sortedIndex=(n, t, r, e) => {r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=n => n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[],j.size=n => null==n?0:n.length===+n.length?n.length:j.keys(n).length,j.first=j.head=j.take=(n, t, r) => null==n?void 0:null==t||r?n[0]:o.call(n,0,t),j.initial=(n, t, r) => o.call(n,0,n.length-(null==t||r?1:t)),j.last=(n, t, r) => null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0)),j.rest=j.tail=j.drop=(n, t, r) => o.call(n,null==t||r?1:t),j.compact=n => j.filter(n,j.identity);var R=(n, t, r) => t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,n => {j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r);j.flatten=(n, t) => R(n,t,[]),j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=(n, t, r, e) => {
    j.isFunction(t)&&(e=r,r=t,t=!1);
    var u=r?j.map(n,r,e):n;
    var i=[];
    var a=[];
    return A(u,(r, e) => {(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i;
  },j.union=function(...args) {return j.uniq(j.flatten(args,!0));},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),n => j.every(t,t => j.indexOf(t,n)>=0));},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,n => !j.contains(t,n));},j.zip=function(...args) {for(var n=j.max(j.pluck(args,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(args,""+r);return t},j.object=(n, t) => {if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=(n, t, r) => {
    if(null==n)return-1;
    var e=0;
    var u=n.length;
    if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1
  },j.lastIndexOf=(n, t, r) => {if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=() => {};j.bind=function(n,t){
    var r;
    var e;
    if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(...args) {if(!(this instanceof e))return n.apply(t,r.concat(o.call(args)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(args)));return Object(i)===i?i:u};
  },j.partial=function(n){var t=o.call(arguments,1);return function(...args) {return n.apply(this,t.concat(o.call(args)));};},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,t => {n[t]=j.bind(n[t],n)}),n;},j.memoize=(n, t) => {var r={};return t||(t=j.identity),function(...args) {var e=t.apply(this,args);return j.has(r,e)?r[e]:r[e]=n.apply(this,args);};},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(() => n(...r),t);},j.defer=function(n){return j.delay(...[n,1].concat(o.call(arguments,1)));},j.throttle=(n, t, r) => {
    var e;
    var u;
    var i;
    var a=null;
    var o=0;
    r||(r={});var c=() => {o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(...args) {var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=args,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i;};
  },j.debounce=(n, t, r) => {
    var e;
    var u=null;
    return function(...args) {
      var i=this;
      var a=args;
      var o=() => {u=null,r||(e=n.apply(i,a))};
      var c=r&&!u;
      return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e
    };
  },j.once=n => {
    var t;
    var r=!1;
    return function(...args) {return r?t:(r=!0,t=n.apply(this,args),n=null,t);};
  },j.wrap=(n, t) => function(...args) {var r=[n];return a.apply(r,args),t.apply(this,r);},j.compose=function(...args) {var n=args;return function(...args) {for(var t=args,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]};},j.after=(n, t) => function(...args) {return --n<1?t.apply(this,args):void 0;},j.keys=_||(n => {if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t}),j.values=n => {var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=n => {var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=n => {var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=n => {var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),t => {if(t)for(var r in t)n[r]=t[r]}),n;},j.pick=function(n){
    var t={};
    var r=c.apply(e,o.call(arguments,1));
    return A(r,r => {r in n&&(t[r]=n[r])}),t;
  },j.omit=function(n){
    var t={};
    var r=c.apply(e,o.call(arguments,1));
    for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t
  },j.defaults=function(n){return A(o.call(arguments,1),t => {if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n;},j.clone=n => j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n,j.tap=(n, t) => (t(n), n);var S=(n, t, r, e) => {
    if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;
    var a=n.constructor;
    var o=t.constructor;
    if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);
    var c=0;
    var f=!0;
    if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f
  };j.isEqual=(n, t) => S(n,t,[],[]),j.isEmpty=n => {if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=n => !(!n||1!==n.nodeType),j.isArray=x||(n => "[object Array]"==l.call(n)),j.isObject=n => n===Object(n),A(["Arguments","Function","String","Number","Date","RegExp"],n => {j["is"+n]=t => l.call(t)=="[object "+n+"]"}),j.isArguments(args)||(j.isArguments=n => !(!n||!j.has(n,"callee"))),"function"!=typeof/./&&(j.isFunction=n => "function"==typeof n),j.isFinite=n => isFinite(n)&&!isNaN(parseFloat(n)),j.isNaN=n => j.isNumber(n)&&n!=+n,j.isBoolean=n => n===!0||n===!1||"[object Boolean]"==l.call(n),j.isNull=n => null===n,j.isUndefined=n => n===void 0,j.has=(n, t) => f.call(n,t),j.noConflict=function(){return n._=t,this},j.identity=n => n,j.times=(n, t, r) => {for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=(n, t) => (null==t&&(t=n,n=0), n+Math.floor(Math.random()*(t-n+1)));var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],n => {j[n]=t => null==t?"":(""+t).replace(T[n],t => I[n][t])}),j.result=(n, t) => {if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=n => {A(j.functions(n),t => {var r=j[t]=n[t];j.prototype[t]=function(...args) {var n=[this._wrapped];return a.apply(n,args),z.call(this,r.apply(j,n));}})};var N=0;j.uniqueId=n => {var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};
  var q=/(.)^/;
  var B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"};
  var D=/\\|'|\r|\n|\t|\u2028|\u2029/g;
  j.template=(n, t, r) => {
    var e;r=j.defaults({},r,j.templateSettings);
    var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g");
    var i=0;
    var a="__p+='";
    n.replace(u,(t, r, e, u, o) => (a+=n.slice(i,o).replace(D,n => "\\"+B[n]), r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"), e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"), u&&(a+="';\n"+u+"\n__p+='"), i=o+t.length, t)),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw (o.source=a, o)}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c
  },j.chain=n => j(n).chain();var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],n => {var t=e[n];j.prototype[n]=function(...args) {var r=this._wrapped;return t.apply(r,args),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r);}}),A(["concat","join","slice"],n => {var t=e[n];j.prototype[n]=function(...args) {return z.call(this,t.apply(this._wrapped,args));}}),j.extend(j.prototype,{chain() {return this._chain=!0,this},value() {return this._wrapped}})
}.call(this);
//# sourceMappingURL=underscore-min.map