const ekran = document.getElementById("ekran");
const emoji = document.getElementById("emoji");

// websayt 1-marta ko'ringanda
ekran.innerHTML = window.innerWidth + "px";

// ekranni katta kichik qilishni kuzatib borish
window.addEventListener("resize", () => {
  ekran.innerHTML = window.innerWidth + "px";

  if (window.innerWidth < 400) {
    emoji.innerHTML = "👍";
  } else if (window.innerWidth < 900) {
    emoji.innerHTML = "😎";
  } else {
    emoji.innerHTML = "🎈";
  }
});
