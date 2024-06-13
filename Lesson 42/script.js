const lengthInput = document.getElementById("length");
const lengthResult = document.getElementById("length_result");

// slider dan olingan natijani ko'rsatish
lengthInput.addEventListener("input", (e) => {
  lengthResult.innerText = e.target.value;
});
