const $table = document.querySelector("tbody");
const $create = document.querySelector("#create");

/* { id name surname salary update } */
/* remove save  */
/* update remove */

const isValid = () =>
  !document.querySelector("input") || $table.children.length == 0;

const createUser = () => {
  if (!isValid()) {
    alert("Yadda saxlayib yeniden yoxluyun");
    return;
  }
  const newRow = document.createElement("tr");
  newRow.innerHTML += `
        <td></td>
        <td><input type="text" placeholder="Ad"></td>
        <td><input type="text" placeholder="Soyad"></td>
        <td><input type="number" placeholder="Maaş"></td>
        <td>
          <button class="btn remove" onclick="removeUser(this)">İmtina et</button>
          <button class="btn save" onclick="saveUser(this)">Yadda saxla</button>
        </td>`;
  $table.append(newRow);
  updateUserIdx();
};

const removeUser = (target) => {
  if (!confirm("Deqiq silmek isteyirsiz")) return;
  const parent = target.parentElement.parentElement;
  parent.remove();
  updateUserIdx();
};

const updateUser = (target) => {
  const row = target.parentElement.parentElement;
  const inputs = row.querySelectorAll("td");
  inputs[1].innerHTML = `<input type="text" value="${inputs[1].textContent}">`;
  inputs[2].innerHTML = `<input type="text" value="${inputs[2].textContent}">`;
  inputs[3].innerHTML = `<input type="number" value="${inputs[3].textContent}">`;
  inputs[4].innerHTML = `
    <button class="btn remove" onclick="removeUser(this)">İmtina et</button>
    <button class="btn save" onclick="saveUser(this)">Yadda saxla</button>
  `;
};

const saveUser = (target) => {
  const row = target.parentElement.parentElement;
  const inputs = row.querySelectorAll("input");
  row.innerHTML = `
        <td>${row.firstElementChild.textContent}</td>
        <td>${inputs[0].value}</td>
        <td>${inputs[1].value}</td>
        <td>${inputs[2].value}</td>
        <td>
          <button class="btn remove" onclick="removeUser(this)">Sil</button>
          <button class="btn update" onclick="updateUser(this)">Düzəliş et</button>
        </td>
      `;
};

const updateUserIdx = () => {
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((r, i) => {
    const idx = r.children[0];
    idx.textContent = i + 1;
  });
};

$create.addEventListener("click", createUser);

// let users = [];
// let id = 1;

// const remove = (id) => {
//   console.log(id);
// };

// const render = () => {
//   clear();

//   users.map((u) => {
//     const $tr = document.createElement("tr");
//     $tr.id = u["id"];

//     const $id = `<td><span>${u["id"]}</span></td>`;
//     $tr.innerHTML += $id;

//     Object.keys(u).map((k) => {
//       if (k != "name" && k != "surname" && k != "salary") return;
//       const $td = document.createElement("td");
//       const $content = document.createElement("span");
//       const $input = document.createElement("input");
//       $content.innerText = u[k];
//       $input.dataset.for = k;

//       $td.append($content);
//       $td.append($input);

//       $tr.append($td);
//     });

//     const $td = document.createElement("td");

//     if (u["update"] == false) {
//       const $remove = document.createElement("button");
//       $remove.innerText = "Sil";
//       $remove.classList.add("remove");
//       const $update = document.createElement("button");
//       $update.classList.add("update");
//       $update.innerText = "Duzelis et";

//       $td.append($remove);
//       $td.append($update);

//       $remove.addEventListener("click", () => {
//         $td.remove();
//       });
//     }

//     const $save = document.createElement("button");
//     $save.innerText = "Yadda saxla";
//     $save.classList.add("save");
//     const $remove = document.createElement("button");
//     $remove.classList.add("remove");
//     $remove.innerText = "Imtina et";

//     $remove.addEventListener("click", () => {
//       const $parent = $remove.parentElement;
//       remove($parent.id);
//     });

//     $td.append($remove);
//     $td.append($save);

//     $tr.append($td);

//     $table.append($tr);
//   });
// };

// const clear = () => {
//   $table.innerHTML = "";
// };

// $create.addEventListener("click", () => {
//   users = [...users, { id, name: "", surname: "", salary: "", update: true }];

//   id += 1;

//   console.log(users);

//   render();
// });
