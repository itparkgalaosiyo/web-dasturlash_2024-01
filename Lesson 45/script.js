const lengthInput = document.getElementById("length");
const lengthResult = document.getElementById("length_result");

const strengthResults = document.getElementsByClassName("xavfsizlik");

const generateBtn = document.getElementById("generate");
const natija = document.getElementById("natija");
const copy = document.getElementById("copy");

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
  tanlovlarniTanlash();
  xavfsizlikniTekshirish();
});

function tanlovlarniTanlash() {
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

  if (arr.length == 0) {
    return;
  }

  for (let i = 0; i < parolUzunligi; i++) {
    parol += arr[Math.floor(Math.random() * arr.length)];
  }
  
  natija.innerText = parol;
}


function xavfsizlikniTekshirish() {
  for (let i = 0; i < 4; i++) {
    strengthResults[i].classList.remove("active");
  }

  if (parolUzunligi <= 4) {
    for (let i = 0; i < 1; i++) {
      strengthResults[i].classList.add("active");
    }
    return;
  } 
  
  if (parolUzunligi <= 8) {
    for (let i = 0; i < 2; i++) {
      strengthResults[i].classList.add("active");
    }
    return;
  }
  
  if (parolUzunligi <= 12) {
    for (let i = 0; i < 3; i++) {
      strengthResults[i].classList.add("active");
    }
    return;
  }

  if (parolUzunligi <= 18) {
    for (let i = 0; i < 4; i++) {
      strengthResults[i].classList.add("active");
    }
    return;
  }
}

copy.addEventListener("click", () => {
  navigator.clipboard.writeText(natija.innerText);
});