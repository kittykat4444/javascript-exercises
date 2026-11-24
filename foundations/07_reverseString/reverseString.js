function reverseString(string) {
   let array = string.split('');
  let reversedArray = array.reverse();
  return reversedArray.join("");
  
  
}
module.exports = reverseString;
