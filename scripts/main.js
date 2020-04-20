function rot13(str) { // LBH QVQ VG!

  let str1 = str.slice().toUpperCase();             // create a copy of the passed string

  let str1Arr = str1.split('');       // split string into character array;

  let alphabet = {                    // object holding all characters of the alphabet
    1: "A",
    2: "B",
    3: "C",
    4: "D",
    5: "E",
    6: "F",
    7: "G",
    8: "H",
    9: "I",
    10: "J",
    11: "K",
    12: "L",
    13: "M",
    14: "N",
    15: "O",
    16: "P",
    17: "Q",
    18: "R",
    19: "S",
    20: "T",
    21: "U",
    22: "V",
    23: "W",
    24: "X",
    25: "Y",
    26: "Z"
  }

  let finalArray = [];                // define empty array to push all shifted values to


  function getKeyByValue(object, value){    // function that returns the object key when given the corresponding value
    for (var key in object){
      if(object[key] === value){
        return key;
      }
    }
  }

  let alphaRegex = /^[A-Za-z]+$/;           // Regex to identify only alphabetic characters
  for(let i=0; i<str1Arr.length; i++){
    if(alphaRegex.test(str1Arr[i])){
      let keyIntial = getKeyByValue(alphabet, str1Arr[i]);

      if (parseInt(keyIntial) <= 13) {        // if key is less than 13, add 13 to get the shifted key value
        let keyFinal = parseInt(keyIntial);
        keyFinal += 13;
        finalArray.push(alphabet[keyFinal]);
      } else {
        let keyFinal = parseInt(keyIntial);   // if key is greater than 13, subtract 13 to get the shifted key value.
        keyFinal -= 13;
        finalArray.push(alphabet[keyFinal]);
      }

    }else{
      finalArray.push(str1Arr[i]);
    }
  }

  let finalStr = finalArray.join("");
  // console.log(finalStr);
  return finalStr;
}
  
function outputText(myTextarea, myModalBody) {
  var inputText = document.getElementById(myTextarea).value;
  console.log(inputText);
  var outputText = rot13(String(inputText));
  console.log(outputText);
  document.getElementById(myModalBody).innerHTML = outputText;

  // console.log(outputText);
}





// **************************
// Textarea Selection
// **************************

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

// **************************
// Close Modal Function 
// **************************


var closeBtnList = document.getElementsByClassName("closeBtn");
var modal = document.getElementsByClassName("modal");
// modal[0] = decrypting
// modal[1] = encrypted
// modal[2] = encrypting


Array.from(closeBtnList).forEach((x) => {
  x.addEventListener("click", closeModal);
});
window.addEventListener('click', clickOutside);
// var decrypModal = document.getElementById("decrypModal");
// var encrypModal = document.getElementById("encrypModal");
// var encryptingModal = document.getElementById("encryptingModal");

function closeModal() {
  modal[0].style.display = "none";
  modal[1].style.display = "none";
  modal[2].style.display = "none";
  
}

function clickOutside(e){
  if (e.target == modal[0] || e.target == modal[1] || e.target == modal[2]) {
    modal[0].style.display = "none";
    modal[1].style.display = "none";
    modal[2].style.display = "none";
    
  }
  
}

// Executes once 'Encrypt' button is clicked
function encrypt() {

  modal[0].style.display = "none";
  modal[1].style.display = "none";
  modal[2].style.display = "block";

  move();

  
  setTimeout(() => {
    modal[1].style.display = "block";
    modal[2].style.display = "none"; 
  }, 3400);
  
  outputText("yourMsgTextarea", "encryptedModalBody");
  document.getElementById("yourMsgTextarea").value = "";
}

// Executes once 'Decrypt' button is clicked
function decrypt() {
  modal[0].style.display = "block";
  modal[1].style.display = "none";
  modal[2].style.display = "none";

  // move();

  
  // setTimeout(() => {
  //   modal[1].style.display = "block";
  //   modal[2].style.display = "none"; 
  // }, 3400);
  
  outputText("decrypMsgTextarea","decryptedModalBody");
  document.getElementById("decrypMsgTextarea").value = "";
  
}


// **************************
// Loadbar function 
// **************************

var quit = true;
function move() {
  if (quit == true) {
    quit = false;
    var elem = document.getElementById("loadBarFill");
    var width = 1;
    var id = setInterval(frame, 20);
  }

  

  function frame() {
    if (width >= 100) {
      clearInterval(id);
      quit = true;
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

// **************************
// Copy Text to Clipboard
// **************************
var copyBtn = document.getElementById("copyBtn");
copyBtn.addEventListener('click', copyText);

function copyText(){
  var myText = document.getElementById("encryptedModalBody").innerHTML;
  console.log("copyText = " + myText);
  var copyText = document.createElement("input");
  document.body.appendChild(copyText);
  copyText.value = myText;
  copyText.select();
  document.execCommand("copy",false);
  copyText.remove();
  
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Text Copied";
}


// **************************
// Countdown Timer 
// **************************


// console.log(str.length);
function countdownTimer(){
  var seconds = 5;
  // Update the count down every 1 second
  var myTimer = setInterval(function () {
    seconds--;
    document.getElementById("timer").innerHTML = seconds + " seconds";

    if (seconds == 0) {
      seconds = 5;
      clearInterval(myTimer);
      // document.getElementById("decryptedModalBody").innerHTML = "Message Deleted";
      modal[0].style.display = "none";
    }
  }, 1000);
}

var decrypBtn = document.getElementById("mainBtnDecryp");
decrypBtn.addEventListener("click", countdownTimer);