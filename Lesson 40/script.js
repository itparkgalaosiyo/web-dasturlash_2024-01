const maslahatlar = [
  "Ilmni fursat bo'lganda o'rganaverish kerak, chunki ilm zarur bo'lgan paytda fursat topilmaydi.",
  "Buguning chorasini ko'rib, ertaga ehtiyoji qolmagan aqllidir.",
  "Dunyoda ilmdan boshqa najot yo'q va bo'lmagay.",
  "Oltin olma, duo ol",
];

const raqam = document.getElementById("raqam");
const maslahat = document.getElementById("maslahat");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let xohishiy = Math.floor(Math.random() * maslahatlar.length);
  maslahat.innerText = maslahatlar[xohishiy];
  raqam.innerText = xohishiy + 1;
});
