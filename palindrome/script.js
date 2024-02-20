// Palindrome Checker
function palindrome(str) {
  // Remove symbols and spaces from str
  const cleanStr = str.toLowerCase().split("").filter((char) =>
    char.match(/[a-z0-9]/)).join("");
  
  // Length of clean str
  const len = cleanStr.length;

  // Check if i-th letter matches i-th last letter
  for (let i = 0; i < Math.round(len / 2); i++) {
    if (cleanStr[i] !== cleanStr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Pass on input text and display answer
function checkIfPalindrome() {
  let text = document.getElementById("str").value;
  let answer = document.getElementById("answer");
  if (palindrome(text)) {
    answer.style.color = "green";
    answer.innerHTML = text + " is a palindrome!";
  } else {
    answer.style.color = "red";
    answer.innerHTML = text + " is not a palindrome.";
  }
}
