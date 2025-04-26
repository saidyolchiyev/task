const inp = document.querySelector("#inp");
const btn = document.querySelector("#add");
const list = document.querySelector("#list");

btn.addEventListener("click", (e) => {
  const username = inp.value;
  const li = document.createElement("li");
  li.innerHTML = username;
  list.append(li);
});
