
const passwordField = document.getElementById("password");
const copyBtn = document.getElementById("copyBtn");
const generateBtn = document.getElementById("generate");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const lengthInput = document.getElementById("length");
const lengthRange = document.getElementById("lengthRange");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "0123456789";
const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

lengthRange.addEventListener("input", () => {
  lengthInput.value = lengthRange.value;
});
lengthInput.addEventListener("input", () => {
  lengthRange.value = lengthInput.value;
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(passwordField.value);
  alert("Password copied to clipboard!");
});

generateBtn.addEventListener("click", () => {
  const length = +lengthInput.value;
  let chars = "";

  if (uppercase.checked) chars += upperChars;
  if (lowercase.checked) chars += lowerChars;
  if (numbers.checked) chars += numberChars;
  if (symbols.checked) chars += symbolChars;

  if (chars === "") {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  passwordField.value = password;
});