// 1
// const fullName = prompt("your fullname: ");
// const arr = fullName.split(" ");
// console.log(arr[0][0], arr[1][0]);

// 2
// const fullName = prompt("your fullname: ");
// const arr = fullName.split(" ");
// const [name, surname] = arr;
// console.log(surname, name);

// 3
// let num = 1234;
// let s = 0;
// while (num > 0) {
//   s += num % 10;
//   num = parseInt(num / 10);
// }
// console.log(s);

//4
// const fullName = prompt("Enter your full name");
// console.log("Salam " + fullName + "!");

//5
// const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];
// const date = prompt();
// const [day, month, year] = date.split(".");
// console.log(day + " " + months[month - 1] + " " + year + "-ci il");

//6
// const idx = prompt("month index");
// console.log(months[idx - 1]);

//7
// const capitalizeWords = (text) => {
//   const arr = text.split(" ");
//   s = "";
//   for (i of arr) {
//     s += i.toUpperCase();
//   }

//   console.log(s);
// };

// capitalizeWords("Hello World");

//8
// const isValidNumber = (tel) => tel.startsWith("+7") && tel.length == 12;
// console.log(isValidNumber("+70000000000"));

//9
// const numCounter = (text) => {
//   s = 0;
//   for (i of text) {
//     if (i != " ") {
//       s += 1;
//     }
//   }

//   console.log(s);
// };

// numCounter("Hello World");

//10
// const isLucky = (num) => {
//   k = 0;
//   m = 0;
//   c = 0;
//   while (num > 0) {
//     c += 1;
//     if (c > 3) {
//       m += num % 10;
//     } else {
//       k += num % 10;
//     }
//     num = parseInt(num / 10);
//   }

//   return k == m;
// };

// console.log(isLucky(234802));

//11
// const text = prompt("enter text");
// const nums = "1234567890";
// let m = 0;
// for (i of text) {
//   if (nums.includes(i)) {
//     m += 1;
//   }
// }

// if (m == 0) {
//   console.log("no numbers");
// } else {
//   console.log("includes numbers");
// }

//12
// const arr = []; // ad, soyad
// const sortByBirths = (arr) =>
//   arr.sort((a, b) => new Date(b.split(", ")[1]) - new Date(a.split(", ")[1]));

// log(sortByBirths(arr));

//13
// const countEvensAndOdds = (nums) => {
//   let e = 0;
//   let o = 0;
//   for (i of nums) {
//     if (i % 2 == 0) {
//       o += 1;
//     } else {
//       e += 1;
//     }
//   }

//   console.log(e, o);
// };
