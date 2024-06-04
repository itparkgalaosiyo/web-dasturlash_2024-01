// const menu = document.getElementById("menu");

// menu.addEventListener("click", () => {
//   console.log("salom");
// });

const harflar = document.getElementsByClassName("harf");
const jon = document.getElementById("jon");

[...harflar].forEach((harf) => {
  harf.addEventListener("click", () => {
    console.log(harf);

    if (harf.classList.contains("tanlangan")) {
      return;
    } else {
      jon.value = jon.value - 1;
      harf.classList.add("tanlangan");
    }
  });
});
