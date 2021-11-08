"use strict";

// Selectors
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";
const length = document.getElementById("name");
const incNumbers = document.getElementById("numbers");
const incSymbols = document.getElementById("symbols");
const generateBtn = document.getElementById("signup");
const pwd = document.getElementById("name2");
const pwdStrength = document.getElementById("password-strength");
const copyBtn = document.getElementById("copy");

// Functions
let pwdVal;

const verify = function () {
  pwdVal = pwd.value;
  let result = zxcvbn(pwdVal);
  pwdStrength.className = "strength-" + result.score;
};

const generate = (length, characters) => {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
};

const passwordGen = function (e) {
  e.preventDefault();
  let characters = alpha;
  incNumbers.checked ? (characters += numbers) : "";
  incSymbols.checked ? (characters += symbols) : "";
  pwd.value = generate(length.value, characters);
  verify();
};

// Event handlers
generateBtn.addEventListener("click", passwordGen);

copyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  pwd.select();
  document.execCommand("copy");
});

pwd.addEventListener("input", verify);
