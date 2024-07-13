const featuresData = [
  {
    icon: "🖥️",
    sarlavha: "Highly compatible",
    malumot:
      "Easy to use and works well with all major computar brands, gaming consoles and mobile devices. Plug & play, no installation or driver need.",
  },
  {
    icon: "🔷",
    sarlavha: "Wireless with Bluetooth",
    malumot:
      "Powerful 2.4G RF technology allows you to connect the cordless keyboard from up to 30ft away. Simply plug the unifying receiver into your computer.",
  },
  {
    icon: "🔋",
    sarlavha: "High capacity battery",
    malumot:
      "Equipped with a long-lasting built-in battery, you'll never have to spend a dime on replaceable ones. Enjoy 40 hours of usage time between charges.",
  },
  {
    icon: "💡",
    sarlavha: "RGB backlit modes",
    malumot:
      "Choose from 4 backlight brightness levels and adjustable breathing speed. Each key glows intensely in the dark and helps you type in low light conditions.",
  },
];

const features = document.getElementById("features");

document.addEventListener("DOMContentLoaded", () => {
  let shablonlar = "";

  for (let i = 0; i < featuresData.length; i++) {
    let shablon = `<article>
            <div class="icon">${featuresData[i].icon}</div>
            <h3>${featuresData[i].sarlavha}</h3>
            <p>${featuresData[i].malumot}</p>
          </article>`;

    shablonlar += shablon;
  }

  features.innerHTML = shablonlar;
});
