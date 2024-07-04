const buttons = document.querySelectorAll("button[data-tanlov]");
const siz = document.getElementById("siz");
const kompyuter = document.getElementById("kompyuter");
const natija = document.getElementById("natija");
const sizBall = document.getElementById("sizBall");
const kompyuterBall = document.getElementById("kompyuterBall");
const qaytibUynash = document.getElementById("qaytibUynash");

const kompyuterTanlovlari = ["✂️", "📄", "🪨"];

let ballar = {
  siz: 0,
  kompyuter: 0,
};

let qaytarish = false;

[...buttons].forEach((button) => {
  button.addEventListener("click", () => {
    // kompyuterning xohishiy tanlovi
    let xohishiyTanlov = Math.trunc(Math.random() * 3);

    // tanlovni aniqlash
    let sizTanlov = button.innerText;
    let kompyuterTanlov = kompyuterTanlovlari[xohishiyTanlov];

    // tanlovni HTML da ko'rsatish
    siz.innerText = sizTanlov;
    kompyuter.innerText = kompyuterTanlov;

    // ballarni to'plab borish
    let yutganBall = ballniAniqlash(sizTanlov, kompyuterTanlov);
    if (yutganBall == 1) {
      ballar["siz"] += 1;
    } else if (yutganBall == -1) {
      ballar["kompyuter"] += 1;
    } else {
      ballar["siz"] += 0.5;
      ballar["kompyuter"] += 0.5;
    }

    // ballarni HTML da ko'rsatish
    sizBall.innerText = ballar.siz;
    kompyuterBall.innerText = ballar.kompyuter;

    // yutganni aniqlash
    let engYuqoriBall = 10;

    if (ballar.siz >= engYuqoriBall && ballar.kompyuter >= engYuqoriBall) {
      natija.innerText = "Durrang! 🤝";
      qaytarish = true;
    } else if (ballar.siz >= engYuqoriBall) {
      natija.innerText = "Siz yutdingiz! 🥳";
      qaytarish = true;
    } else if (ballar.kompyuter >= engYuqoriBall) {
      natija.innerText = "Kompyuter yutdi! 🤖";
      qaytarish = true;
    }

    // qaytib boshidan boshlash
    if (qaytarish == true) {
      qaytibUynash.style.display = "block";
      buttons.forEach(btn => btn.setAttribute("disabled", true));
      qaytarish = false;
    }
  });
});

qaytibUynash.addEventListener("click", () => {
  ballar["siz"] = 0;
  ballar["kompyuter"] = 0;
  siz.innerText = "";
  kompyuter.innerText = "";
  sizBall.innerText = ballar.siz;
  kompyuterBall.innerText = ballar.kompyuter;
  natija.innerText = "";
  qaytibUynash.style.display = "none";
  buttons.forEach(btn => btn.removeAttribute("disabled"));
});

function ballniAniqlash(siz, kompyuter) {
  let ball;

  if (siz == "✂️" && kompyuter == "✂️") {
    ball = 0;
  } else if (siz == "✂️" && kompyuter == "📄") {
    ball = 1;
  } else if (siz == "✂️" && kompyuter == "🪨") {
    ball = -1;
  } else if (siz == "📄" && kompyuter == "✂️") {
    ball = -1;
  } else if (siz == "📄" && kompyuter == "📄") {
    ball = 0;
  } else if (siz == "📄" && kompyuter == "🪨") {
    ball = 1;
  } else if (siz == "🪨" && kompyuter == "✂️") {
    ball = 1;
  } else if (siz == "🪨" && kompyuter == "📄") {
    ball = -1;
  } else if (siz == "🪨" && kompyuter == "🪨") {
    ball = 0;
  }

  return ball;
}

/**
 * Men vs Kompyuter => Natija
 * ✂️     ✂️       => 0
 * ✂️     📄       => +1
 * ✂️     🪨       => -1
 * 📄     ✂️       => -1
 * 📄     📄       => 0
 * 📄     🪨       => +1
 * 🪨     ✂️       => +1
 * 🪨     📄       => -1
 * 🪨     🪨       => 0
 */
