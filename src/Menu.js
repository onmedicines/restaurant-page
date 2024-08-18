export default function () {
  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.textContent = "This is the menu page";
  div.appendChild(h1);

  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(div);
}
