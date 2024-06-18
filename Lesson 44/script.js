const lengthInput = document.getElementById("length");
const lengthResult = document.getElementById("length_result");

const strengthResults = document.getElementsByClassName("xavfsizlik");

const generateBtn = document.getElementById("generate");
const natija = document.getElementById("natija");

const t_uppercase = document.getElementById("t_uppercase");
const t_lowercase = document.getElementById("t_lowercase");
const t_numbers = document.getElementById("t_numbers");
const t_symbols = document.getElementById("t_symbols");

const uppercase = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", 
  "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];

const lowercase = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
  "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];

const numbers = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9
];

const symbols = [
  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+",
  "[", "]", "{", "}", "|", ":", ";", ",", ".",
  "?"
];

let parolUzunligi = 0;

// slider dan olingan natijani ko'rsatish
lengthInput.addEventListener("input", (e) => {
  parolUzunligi = e.target.value;
  lengthResult.innerText = parolUzunligi;
});

// generate button bosilganda, parolni ko'rsatish
generateBtn.addEventListener("click", () => {
  let arr = [];
  let parol = "";

  if (t_uppercase.checked == true) {
    arr = arr.concat(uppercase);
  }

  if (t_lowercase.checked == true) {
    arr = arr.concat(lowercase);
  }

  if (t_numbers.checked == true) {
    arr = arr.concat(numbers);
  }

  if (t_symbols.checked == true) {
    arr = arr.concat(symbols);
  }

  for (let i = 0; i < parolUzunligi; i++) {
    parol += arr[Math.floor(Math.random() * arr.length)];
  }
  
  natija.innerText = parol;
});


// Draft
// let arr = [];

// let natija = "";

// if (1 == 1) {
//   arr = arr.concat(uppercase);
// }

// if (2 == 2) {
//   arr = arr.concat(lowercase);
// }

// if (3 == 3) {
//   arr = arr.concat(numbers);
// }

// if (4 == 4) {
//   arr = arr.concat(symbols);
// }

// for (let i = 0; i < 18; i++) {
//   natija += arr[Math.floor(Math.random() * arr.length)];
// }

// console.log(natija);
