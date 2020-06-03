window.addEventListener("keydown", function(e) {
  if(e.keyCode == 38 || e.keyCode == 40) {
    e.preventDefault();
    return;
  }
});

o = true;
function reset(){
  arr = document.getElementsByClassName("sb");

  if (o == true) {
    for (const e of arr) {
      e.style.width = "0%";
      e.style.height = "0%";
      e.style.opacity = 0;
    }
    o = false;
  }
  else {
    for (const e of arr) {
      e.style.width = "100%";
      e.style.height = "100%";
      e.style.opacity = 1;
    }
    o = true;
  }
}
