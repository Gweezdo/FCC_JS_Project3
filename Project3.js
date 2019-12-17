function rot13(str) { // LBH QVQ VG!

  let str1 = str.slice();

  let str1Arr = str1.split('');
  console.log("str1Arr = " + str1Arr);

  let alphabet = {
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

  let finalArray = [];


  for(let i=0; i<str1Arr.length; i++){
    for (var key in alphabet) { 
      if (alphabet.hasOwnProperty(key)) { 
          if (alphabet[key] === str1Arr[i]){
            if(parseInt(key)<=13){
              console.log("if Key Before: " + key);
              let a = parseInt(key)+=13;
              console.log("if Key After: " + a);
              finalArray.push(alphabet[a]);
            } else{
              console.log("else Key Before: " + key);
              let a = parseInt(key)-=13;
              finalArray.push(alphabet[a]);
              console.log("else Key After: " + a);
              
            }
          } 
        }
      }

    }


  console.log(finalArray)

    return str;
}
  
  // Change the inputs below to test
  rot13("SERR PBQR PNZC");