const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const list = document.querySelector("#cats");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const newLI = document.createElement("LI");
  const catName = input.value;
  newLI.innerText = catName;
  list.append(newLI);
  input.value = "";
})