// Display current rotation value
function displayRotValue() {
  let rotSlider = document.getElementById("rot-value");
  let rotNumber = document.getElementById("range-value");
  rotNumber.innerHTML = rotSlider.value;
}

// Encode/decode message
function applyCipher() {
  // Input string
  let input = document.getElementById("input").value;
  
  // Check mode setting (encode or decode)
  // shift direction (encode by default)
  let shiftDir = -1;

  if (document.getElementById("decode").checked) {
    shiftDir = 1;
  }

  // Char code of starting char ('Z' for encode, 'A' for decode)
  let baseValue = 0;
  if (shiftDir > 0) {
    baseValue = "Z".charCodeAt(0);
  } else {
    baseValue = "A".charCodeAt(0);
  }

  // Rotation value
  let rot = document.getElementById("rot-value").value * shiftDir;

  // Array for encoded chars
  const cipherChars = [];

  // Apply cipher on every alphabetic char
  input.split("").forEach((char) => {
    // rotate A-Z and a-z letters by rotation value
    if (/[A-Z]/.test(char)) {
      let newChar = baseValue + (char.charCodeAt(0) - rot - baseValue) % 26;
      cipherChars.push(String.fromCharCode(newChar));
    } else if (/[a-z]/.test(char)) {
      let newChar = baseValue + (char.toUpperCase().charCodeAt(0) - rot - baseValue) % 26;
      cipherChars.push(String.fromCharCode(newChar).toLowerCase());
    } else {
      // pass on other symbols without shifting
      cipherChars.push(char);
    }
  });

  // Display output text
  let output = document.getElementById("output");
  output.innerHTML = cipherChars.join("");
  // Scroll page to show output
  output.scrollIntoView({ behavior: "smooth"});
}
