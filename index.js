const buttonOne = document.querySelector('[data-js="button-anonymous"]');
buttonOne.addEventListener("click", () => {
  console.log("Why did the JavaScript developer go broke?");
});

const buttonTwo = document.querySelector('[data-js="button-chris"]');

function ChrisCallbackson() {
  console.log("Why did the JavaScript developer go broke?");
}

buttonTwo.addEventListener("click", ChrisCallbackson);

const buttonThree = document.querySelector(
  '[data-js="button-anonymous-with-event"]'
);

buttonThree.addEventListener("click", (event) => {
  console.log("Why did the JavaScript developer go broke?");
  console.log(event);
});

const buttonFour = document.querySelector(
  '[data-js="button-chris-with-event"]'
);

function ChrisCallbacksonWithAccessToTheEventObject(broccoli) {
  console.log("Why did the JavaScript developer go broke?");
  console.log(broccoli);
}

buttonFour.addEventListener(
  "click",
  ChrisCallbacksonWithAccessToTheEventObject
);

function Elvie(event, callback) {
  const eventObject = {
    stageLights: "on",
    soundSystem: "loud",
    audience: "ready",
  };
  if (event === "click") {
    callback(eventObject);
  }
}

Elvie("click", ChrisCallbacksonWithAccessToTheEventObject);
