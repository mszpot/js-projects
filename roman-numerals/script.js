// Arabic number to roman numeral converter
function convertToRoman(num) {
  const arabicToRoman = {
       1: "I",
       4: "IV",
       5: "V",
       9: "IX",
      10: "X",
      40: "XL",
      50: "L",
      90: "XC",
     100: "C",
     400: "CD",
     500: "D",
     900: "CM",
    1000: "M"
  }

  // Check if passed value is a number
  if (typeof num !== "number") {
    return num + " is not arabic number."
  }

  // Check if number exceeds max value
  if (num > 100000) {
    return "Number is too big. Please type a smaller number."
  }
  
  // Array to store numbers converted to roman
  const romanNums = [];

  // Value left to convert
  let numToConvert = 0;
  if (num < 0) {
    numToConvert = Math.floor(num * (-1));
    romanNums.push("-");
  } else if (num > 0) {
    numToConvert = Math.floor(num);
  } else {
    return "0";
  }

  // Add roman numerals until given number is fully converted
  while (numToConvert > 0) {
    for (const [key, value] of Object.entries(arabicToRoman).reverse()) {
      if (numToConvert >= key) {
        romanNums.push(value);
        numToConvert -= key;
        break;
      }
    }
  }

  // Return converted number as string
  return romanNums.join("");
}

// Change event for input element
const arabic = document.getElementById("arabic");

arabic.addEventListener("change", () => { 
  let num = arabic.value * 1;
  document.getElementById("roman").innerHTML = convertToRoman(num);
});
