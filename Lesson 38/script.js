// variable
// let ism = "Sardor";
const id = 12345;

// boolean
let bitiruvchi = true;

// arrays
let student1 = "Bekzod";
let student2 = "Muhammad";
let student3 = "Javohir";

let studentlar = ["Bekzod", "Muhammad", "Javohir"];

// console.log(student2); // Muhammad
// console.log(student3); // Javohir
// console.log(studentlar); // hammasi
// console.log(studentlar[0]); // Bekzod
// console.log(studentlar[0 + 2]); // Javohir

let a = 1;
let b = 2;
let c = 3;

let mevalar = ["olma", "banan", "anor", "nok", "gilos", "apelsin"];

// console.log(mevalar); // hammasi
// console.log(mevalar[b]); // anor
// console.log(mevalar[c + b - a]); // 4 => gilos
// console.log(-1); // -1
// console.log(mevalar[-1]); // undefined - ishlamaydi

// console.log(mevalar.length); // 6
// console.log(mevalar.length - 3); // 3

// mevalar.push("mandarin"); // oxiriga qo'shish
// mevalar.unshift("ananas"); // boshiga qo'shish

// console.log(mevalar);

// mevalar.pop(); // oxiridan olib tashlash
// mevalar.pop();
// mevalar.pop();
// mevalar.shift();
// mevalar.shift();

// console.log(mevalar);

let sonlar = [34, 1, 6453, -2, 45, 96];
let ismlar = ["Sardor", "Amirbek", "Bekzod", "Javohir", "Muhammad", "Shaxzod"];

// sonlar.sort((a, b) => b - a);
// ismlar.sort();

// console.log(sonlar);
// console.log(ismlar);

// Object
let ism = "Bekzod";
let yosh = 15;
let sinf = 8;
let student = true;

let bekzod = {
  ism: "Bekzod Hikmatov",
  yosh: 15,
  sinf: 8,
  student: true,
};

// console.log(yosh); // 15 -> Egasi aniq emas
// console.log(bekzod); // hamma malumotlar
// console.log(bekzod.ism); // Bekzodning ismi

bekzod.haydovchi = true; // yangi malumot qo'shish

bekzod.sinf = 9; // bor malumotni o'zgartirish
// bekzod[sinf] = 9;

// console.log(bekzod);

bekzod.mashinalar = ["BMW", "Bugatti", "Lamborghini", "Ferrari"];

// console.log(bekzod); // hamma malumotlar
// console.log(bekzod.mashinalar); // Bekzodning mashinalari
// console.log(bekzod.mashinalar[1]); // Bekzodning 2-mashinasi
