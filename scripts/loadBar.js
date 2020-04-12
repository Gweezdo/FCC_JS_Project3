var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadBarFill");
    var width = 1;
    var id = setInterval(frame, 20);
    // if (width >= 60){
    //     id = setInterval(frame, 100)
    // }

  }
  function frame() { 
    if (width >= 100) {
      clearInterval(id);
      i = 0;
    } else if (width <= 30) {
      width += 3;
      elem.style.width = width + "%";
    } else if (width > 30 && width < 40) {
      width += 0.2;
      elem.style.width = width + "%";
    } else if (width > 41 && width < 42) {
      width += 0.01;
      elem.style.width = width + "%"; 
    } else if (width > 40 && width < 70) {
      width += 0.7;
      elem.style.width = width + "%";
    } else if (width > 70 && width < 90) {
      width += 5;
      elem.style.width = width + "%";
    } else if (width > 90 && width < 100) {
      width += 1;
      elem.style.width = width + "%";
    }
}
}
