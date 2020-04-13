
// Textarea Selection
var yourMsg = document.getElementById("yourMsg");
var decrypMsg = document.getElementById("decrypMsg");

function selectEncrip() {
  yourMsg.addEventListener('click', select1);

  function select1(){
    yourMsg.style.opacity = '1';
    decrypMsg.style.opacity = '0.5';
  }
}

function selectDecrip() {
  decrypMsg.addEventListener("click", select2);

  function select2() {
    yourMsg.style.opacity = "0.5";
    decrypMsg.style.opacity = "1";
  }
}

// Encrypting Loadbar function 
var i = 0;
function move() {
  console.log("hallow hallow")
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("loadBarFill");
    var width = 1;
    var id = setInterval(frame, 20);
    return true;
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




// Countdown Timer 
var str =
  "lksdfj lksjdf lkjsdf sdlfkj asdf ads a saads asdfsaf asd ads dsf sdf asdf a asdf asdf asdf sadf asd asd asd sad asd asd fsd fsdfsdfsdfsdf asdf sdf sdfasdfsdfsaf sfd af asdf asdf dsfsdfasdf  a  asdf asdf asdf asd asd asd a sdf asdf asdf sdf sdfasdf asdf asdf asdf asdf asdf asdf asdf asdf ";
seconds = parseInt((str.length / 200) * 60);
// Update the count down every 1 second
var myTimer = setInterval(function () {
  seconds--;
  document.getElementById("timer").innerHTML = seconds + " seconds";

  if (seconds <= 0) {
    clearInterval(myTimer);
  }
}, 1000);

// close 

// var decrypModal = document.getElementById("decrypModal");
var encrypModal = document.getElementById("encrypModal");
var encryptingModal = document.getElementById("encryptingModal");

var closeBtnTop1 = document.getElementById("closeBtnTop1");
var closeBtnTop2 = document.getElementById("closeBtnTop2");
var closeBtnTop3 = document.getElementById("closeBtnTop3");
var closeBtnBottom1 = document.getElementById("closeBtnBottom1");
var closeBtnBottom2 = document.getElementById("closeBtnBottom2");
var cancelBtn = document.getElementById("cancelBtn");
var temp = waitForIt;
  closeBtnTop1.addEventListener('click', closeModal);
  closeBtnTop2.addEventListener("click", closeModal);
  closeBtnTop3.addEventListener("click", closeModal);
  closeBtnBottom1.addEventListener("click", closeModal);
  console.log("123");
  closeBtnBottom2.addEventListener("click", closeModal);
  cancelBtn.addEventListener("click", closeModal);
function waitForIt() {
  encryptingModal.style.display = "none";
  encrypModal.style.display = "block";
}
  function closeModal() {
    decrypModal.style.display = 'none';
    encrypModal.style.display = 'none';
    encryptingModal.style.display = "none";
    temp = nothing;

    
    function nothing() {}
    
  }

// Executes once 'Encrypt' button is clicked
function encrypt() {
  encryptingModal.style.display = "none";
  $("header", ".flexContainerMain1").css("background", "rgba(13, 11, 12, 0.2)");
  $("header", ".flexContainerMain1").css("opacity", "0.5");
  encryptingModal.style.display = "block";
  $("textarea").css("background", "rgba(13, 11, 12, 0.2)");

  move();
  
  setTimeout(temp, 3400);
}