// FUNCTION
// Yomon usuli
// console.log(10 - 4); // 6
// console.log(15 - 3); // 12

// a * b + c - d
// console.log(5 * 2 + 4 - 1);
// console.log(2 * 5 + 3 - 2);

// Yaxshi usuli
function ayirish() {
  console.log(7 - 5); // 2
}

// ayirish(); // 2
// ayirish(); // 2
// ayirish(); // 2

function ayirish2(raqam1, raqam2) {
  console.log(raqam1 - raqam2); // ?
}

// ayirish2(10, 4); // 6
// ayirish2(15, 12); // 3

// Salom, [ism]
function salomBer(ism) {
  console.log("Salom, " + ism);
}

// salomBer("Bekzod");
// salomBer("Shaxriddin");

// Salom, mening ismim [ism]. Men hozir [yosh] yoshdaman. Va [sinf]-sinfda o'qiyman.
function tanishtirish(ism, yosh, sinf) {
  console.log(`Salom, mening ismim ${ism}. Men hozir ${yosh} yoshdaman. Va ${sinf}-sinfda o'qiyman.`);
}

// tanishtirish("Bekzod", 15, 9); // Salom, ....
// tanishtirish("Shaxriddin", 17, 12); // Salom, ....
// tanishtirish("Javohir", 13, 7); // Salom, ....

// Salom, [ism]. Siz [yosh]-yilda tu'gilgansiz. 
function malumot(ism, yosh) {
  console.log(`Salom, ${ism}. Siz ${new Date().getFullYear() - yosh}-yilda tu'gilgansiz.`)
}

// malumot("Bekzod", 15);
// malumot("Shaxriddin", 17);

// a * c + b - d
function formula(a, b, c, d) {
  console.log(a * c + b - d);
}

formula(5, 2, 3, 1); // 16

// d * (c + b) - (a * e)
function formula2(a, b, c, d, e) {
  console.log(d * (c + b) - (a * e));
}

formula2(1, 2, 3, 4, 5);
// 4 * (3 + 2) - (1 * 5) = 15