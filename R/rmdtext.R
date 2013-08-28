rmdtextencoded <- function(text){
  #fix for osx
  options(bitmapType = 'cairo');
  writeLines(URLdecode(text), con="input.Rmd");
  knit2html("input.Rmd", output="output.html");
  invisible();
}

