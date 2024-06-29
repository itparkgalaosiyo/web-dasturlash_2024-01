const buttons = document.getElementsByTagName("button");
const siz = document.getElementById("siz");
const kompyuter = document.getElementById("kompyuter");
const natija = document.getElementById("natija");

const kompyuterTanlovlari = ["✂️", "📄", "🪨"];

[...buttons].forEach(button => {
    button.addEventListener("click", () => {
        // kompyuterning xohishiy tanlovi
        let xohishiyTanlov = Math.trunc(Math.random() * 3);

        // tanlovni aniqlash
        let sizTanlov = button.innerText;
        let kompyuterTanlov = kompyuterTanlovlari[xohishiyTanlov];
        
        // tanlovni HTML da ko'rsating
        siz.innerText = sizTanlov;
        kompyuter.innerText = kompyuterTanlov;

        let yutganBall = yutganniAniqlash(sizTanlov, kompyuterTanlov);
        if (yutganBall > 0) {
            natija.innerText = "Siz";
        } else if (yutganBall < 0) {
            natija.innerText = "Kompyuter";
        } else {
            natija.innerText = "Durrang";
        }
    });
});

function yutganniAniqlash(siz, kompyuter) {
    let ball;

    if (siz == "✂️" && kompyuter == "✂️") {
        ball = 0;
    } else if (siz == "✂️" && kompyuter == "📄") {
        ball = 1;
    } else if (siz == "✂️" && kompyuter == "🪨") {
        ball = -1;
    } else if (siz == "📄" && kompyuter == "✂️") {
        ball = -1;
    }  else if (siz == "📄" && kompyuter == "📄") {
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