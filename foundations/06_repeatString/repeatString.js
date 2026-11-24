function repeatString(string, num) {
let sentence = ""
  for (let i = 1; i <= num; i++) {
    sentence += string;
  }
  return sentence;
}


// Do not edit below this line
module.exports = repeatString;
