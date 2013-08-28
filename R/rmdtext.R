rmdtextencoded <- function(text){
  writeLines(URLdecode(text), con="input.Rmd");
  knit2html("input.Rmd", output="output.html");
  invisible();
}

