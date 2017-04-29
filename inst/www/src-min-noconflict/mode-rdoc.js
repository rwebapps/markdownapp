ace.define("ace/mode/rdoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/tokenizer","ace/mode/text_highlight_rules","ace/mode/rdoc_highlight_rules","ace/mode/matching_brace_outdent"],(e, t, n) => {
  var r=e("../lib/oop");
  var i=e("./text").Mode;
  var s=e("../tokenizer").Tokenizer;
  var o=e("./text_highlight_rules").TextHighlightRules;
  var u=e("./rdoc_highlight_rules").RDocHighlightRules;
  var a=e("./matching_brace_outdent").MatchingBraceOutdent;
  var f=function(e){this.$tokenizer=new s((new u).getRules()),this.$outdent=new a};
  r.inherits(f,i),function(){this.getNextLineIndent=function(e,t,n){return this.$getIndent(t)}}.call(f.prototype),t.Mode=f
}),ace.define("ace/mode/rdoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/latex_highlight_rules"],(e, t, n) => {
  var r=e("../lib/oop");
  var i=e("../lib/lang");
  var s=e("./text_highlight_rules").TextHighlightRules;
  var o=e("./latex_highlight_rules");
  var u=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:"text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell.text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-z0-9]+|[^a-zA-z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell.text",regex:"\\s+"},{token:"nospell.text",regex:"\\w+"}]}};
  r.inherits(u,s),t.RDocHighlightRules=u
}),ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(e, t, n) => {
  var r=e("../lib/oop");
  var i=e("./text_highlight_rules").TextHighlightRules;
  var s=function(){this.$rules={start:[{token:"keyword",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"string",regex:"\\$(?:(?:\\\\.)|(?:[^\\$\\\\]))*?\\$"},{token:"comment",regex:"%.*$"}]}};
  r.inherits(s,i),t.LatexHighlightRules=s
}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(e, t, n) => {
  var r=e("../range").Range;
  var i=() => {};
  (function(){this.checkOutdent=(e, t) => /^\s+$/.test(e)?/^\s*\}/.test(t):!1,this.autoOutdent=function(e,t){
    var n=e.getLine(t);
    var i=n.match(/^(\s*\})/);
    if(!i)return 0;
    var s=i[1].length;
    var o=e.findMatchingBracket({row:t,column:s});
    if(!o||o.row==t)return 0;var u=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,s-1),u)
  },this.$getIndent=e => e.match(/^\s*/)[0]}).call(i.prototype),t.MatchingBraceOutdent=i
})