const count = prompt("Enter number: ");
let bottomY = 30;

const $container = document.querySelector(".container");

a = 0;
while (a < count) {
  a += 1;
  const $box = document.createElement("div");
  $box.classList.add("box", a % 2 == 0 ? "left" : "right");
  $box.style.bottom = `${bottomY}px`;
  $container.append($box);
  bottomY += 40;
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((b, idx) => {
  setTimeout(() => {
    b.classList.add("active");
  }, idx * 1000);
});
