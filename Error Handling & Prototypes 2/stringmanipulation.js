function manipulateString(str) {
    const manipulatedStr = str.toUpperCase();
  
    function logString() {
      console.log(`The manipulated string is: ${manipulatedStr}`);
    }
  
    return logString;
  }
  const sentence = "HELLO WORLD!.";

  const logManipulatedString = manipulateString(sentence);
  
  logManipulatedString(); // logs "The manipulated string is: HELLO WORLD."
    