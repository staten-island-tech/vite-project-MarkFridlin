import "../CSS/style.css";
import "../CSS/variable.css";
let formObject;

function create() {
  const formdata = [
    document.querySelector("#inputv"),
    document.querySelector("#inputx"),
    document.querySelector("#inputz"),
  ];

  const name = formdata[0].value;
  const picture = formdata[1].value;
  const desc = formdata[2].value;

  formObject = { name, picture, desc };
}

function addCard() {
  const cardHTML = `
    <div class="card card-ani">
      <h2>${formObject.name}</h2>
      <img class="images" src="${formObject.picture}" alt="Image of ${formObject.name}" />
      <h3>${formObject.desc}</h3>
      <button class="remove-btn button-ani">Remove</button>
    </div>
    `;

  DOMselectors.cardContainer.insertAdjacentHTML("beforeend", cardHTML);
  document
    .querySelectorAll("#inputv, #inputx, #inputz")
    .forEach((input) => (input.value = ""));
}

function removeCard() {
  DOMselectors.cardContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("remove-btn")) {
      const card = event.target.closest(".card");
      card.remove();
    }
  });
}

DOMselectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  create();
  addCard();
  removeCard();
});

function createSorted(Skibidi) {
  document.querySelector(".container").innerHTML = "";
}
createSorted();
