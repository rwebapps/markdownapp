## This app requires OpenCPU 1.0.1 or higher !!!! 
##

#' @export
rmdtext <- function(text){
  writeLines(text, con="input.Rmd");
  knit2html("input.Rmd", output="output.html");
  invisible();
}

