# FCC_JS_Project3
Free Code Camp JavaScript Project 3 - Caesars Cipher

JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Proposed steps to solve problem:
1. try to write a pure function 
2. make a copy of the passed string
3. split the string into an array
4. define an alphabet object that contains all the letter of the alphabet with corresponding key values
5. define an empty array 
6. iterate through the string array checking if element[i] is present in the alphabet object
7. if true, check if that key value is greater than or less than 13
8. if <= 13, add 13 to key value to extract the corresponding value
9. if > 13, subtract 13 from the key value to extract the corresponding value
10. push these values to the newly defined "empty" array
11. if for loop runs into an element not defined in the alphabet object (such as punctuation or space), push this to the array anyways
12. once the entire string has been converted, join() the array to form a string and return the string.