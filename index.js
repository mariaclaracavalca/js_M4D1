function twoNumbers(num1, num2) {
  if (num1 === 50 || num2 === 50 || num1 + num2 === 50) {
    return true;
  } else return false;
}
console.log(twoNumbers(20, 30));

function remove(word, m) {
  const newWord = word.split("");
  newWord.splice(m, 1);
  return newWord.join("");
}
console.log(remove("Maria", 1));

function controlNUmbers(num01, num02) {
  if (
    (num01 >= 40 && num01 <= 60 && num02 >= 40 && num02 <= 60) ||
    (num01 >= 70 && num01 <= 100 && num02 >= 70 && num02 <= 100)
  ) {
    return true;
  } else return false;
}
console.log(controlNUmbers(60, 40));
console.log(controlNUmbers(29, 52));
console.log(controlNUmbers(70, 100));
console.log(controlNUmbers(111, 121));

function checkName(cityName) {
  const lowercaseCityName = cityName.toLowerCase();
  if (
    lowercaseCityName.indexOf("los") === 0 ||
    lowercaseCityName.indexOf("new") === 0
  ) {
    return cityName;
  } else {
    return false;
  }
}

console.log(checkName("Los Angeles"));
console.log(checkName("New York"));
console.log(checkName("Paris"));

function soma(ar) {
  let plus = 0;
  for (let i = 0; i < ar.length; i++) {
    plus += ar[i];
  }
  return plus;
}
console.log(soma([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function inclusion(str) {
  return str.includes(1) && !str.includes([3]);
}
console.log(inclusion([2, 7]));

let angle = 180;
let typeAngle;
function anglesRadius() {
  if (angle < 90) {
    typeAngle = "Acuto";
  } else if (angle > 90 && angle < 180) {
    typeAngle = "Ottuso";
  } else if (angle === 90) {
    typeAngle = "Retto";
  } else if (angle === 180) {
    typeAngle = "Piatto";
  }
  return typeAngle;
}
typeAngle = anglesRadius(angle);
console.log(typeAngle);

function searchName(Fiat) {
  let FIAT = Fiat.toUpperCase();
  let array = FIAT.split(" ");
  let acronym = "";
  for (index of array) {
    acronym += index.charAt(0);
  }
  return acronym;
}
console.log(searchName("Fabbrica Italiana Automobili Torino"));
