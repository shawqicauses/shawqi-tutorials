import { changeTitle } from "./dom.js";

const button = document.querySelector("#button");

button.addEventListener("click", () => {
  changeTitle("Title Has Been Changed.");
});
