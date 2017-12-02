// Add zero in front of numbers < 10
export function zeroPadNumber(num) {
  let numText = num;
  if (num < 10)
    numText = "0" + numText;
  return numText;
}

//Converts numeric digits to monospace characters
export function convertToMonospaceDigits(toConvert) {
  let converted = "";
  
  const str = toConvert.toString();
  for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (char >= '0' && char <= '9')
      char = String.fromCharCode("0x1" + char);
    converted = converted + char;
  }
  
  return converted;
}