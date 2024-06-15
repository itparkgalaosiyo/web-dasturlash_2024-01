const lengthInput = document.getElementById("length");
const lengthResult = document.getElementById("length_result");

const strengthInputs = document.getElementsByClassName("checkbox");
const strengthResults = document.getElementsByClassName("xavfsizlik");

// slider dan olingan natijani ko'rsatish
lengthInput.addEventListener("input", (e) => {
  lengthResult.innerText = e.target.value;
});

// xavfsizlikni tekshirish
[...strengthInputs].forEach((input) => {
  let tekshirilganSoni = 0;
  input.addEventListener("input", () => {
    for (strength of strengthInputs) {
      // agar tekshirilgan bo'lsa, sonni 1+ ko'paytir
      // bo'lmasa, xavfsizlik darajasini tushir
      if (strength.checked == true) {
        tekshirilganSoni = tekshirilganSoni + 1;
      } else {
        console.log(tekshirilganSoni);
        strengthResults[tekshirilganSoni].classList.remove("active");
      }
    }

    for (let result = 0; result < tekshirilganSoni; result++) {
      strengthResults[result].classList.add("active");
    }
    tekshirilganSoni = 0;
  });
});
