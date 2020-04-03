function rot13(str) { // LBH QVQ VG!

  let str1 = str.slice();             // create a copy of the passed string

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
  console.log(finalStr);
  return finalStr;
}
  
  // Change the inputs below to test
  // rot13("SERR PBQR PNZC");

  