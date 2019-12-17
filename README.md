# FCC_JS_Project3
Free Code Camp JavaScript Project 3 - Caesars Cipher

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