// Math
// PI = 3.14
// console.log(Math.PI); // 3.1415...

// butun sonlarni to'g'ri oddiy songa aylantirish
// 5.3 => 5; 5.49 => 5; 5.5 => 6; 5.8 => 6;
// console.log(Math.round(5.3)); // 5
// console.log(Math.round(5.49)); // 5
// console.log(Math.round(5.5)); // 6
// console.log(Math.round(5.9)); // 6

// butun sonlarni pastga tushurish
// console.log(Math.floor(5.3)); // 5
// console.log(Math.floor(5.49)); // 5
// console.log(Math.floor(5.5)); // 5
// console.log(Math.floor(5.9)); // 5

// butun sonlarni tepaga ko'tarish
// console.log(Math.ceil(5.1)); // 6
// console.log(Math.ceil(5.9)); // 6

// butun sonlarni yuqotish
// console.log(Math.trunc(5.3)); // 5
// console.log(Math.trunc(5.49999)); // 5
// console.log(Math.trunc(5.9)); // 5

// xohishiy raqam ko'rsatish
// console.log(Math.random()); // 0.000...1 => 0.999...
// console.log(Math.random() * 10); // 0.000...1 => 10.999...

// let xohishiyButunSon = Math.random() * 10 + 1;
// console.log(Math.trunc(xohishiyButunSon)); // 1 => 10

// ildiz ostini chiqarish - square root
// _/9 = 3; _/81 = 9
// console.log(Math.sqrt(9)); // 3
// console.log(Math.sqrt(81)); // 9
// console.log(Math.sqrt(1)); // 1
// console.log(Math.sqrt(0)); // 0
// console.log(Math.sqrt(-9)); // NaN

// Darajaga ko'paytirish
// 3^1 = 3; 3^2 = 9; 3^3 = 27; 3^4 = 81
// 3^3 = 3 * 3 * 3 = 27
// console.log(Math.pow(3, 1)); // 3
// console.log(Math.pow(3, 2)); // 9
// console.log(Math.pow(3, 3)); // 27
// console.log(Math.pow(3, 4)); // 81
// console.log(Math.pow(3, 20)); // 3486784401

// Minimum va maximum sonlarni topish
// console.log(Math.min(100, -50, 80, -27, -20)); // -50
// console.log(Math.max(78, 50, 80, -10, 60)); // 80

const buttons = document.getElementsByTagName("button");
const siz = document.getElementById("siz");

[...buttons].forEach(button => {
    button.addEventListener("click", () => {
        // console.log(button.dataset.tanlov);
        siz.innerText = button.innerText;
    });
});