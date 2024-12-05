// Task 3
list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, ...rest] = list;
console.log(first, second);

// Task 4
list = [];
a = 0;
while (a < 10) {
  list = [...list, a];
  a += 1;
}
console.log(list);
console.log(Math.max(...list));

// Task 5
list = [];
a = 0;
while (a < 5) {
  list = [...list, a];
  a += 1;
}
console.log(list);
list2 = list.map((i) => i * 2);
console.log(list2, list == list2);
