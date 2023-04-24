"use strict";

const destination = document.querySelector(".grid");
const redButton = document.querySelector(".red");
const blueButton = document.querySelector(".blue");
const greenButton = document.querySelector(".green");

let selectedColor = "";

for (let i = 0; i < 100; i++) {
  const newLi = document.createElement("li");
  newLi.setAttribute("class", "cell");
  destination.append(newLi);
}

const allOfTheListItems = document.querySelectorAll(".cell");
console.dir(allOfTheListItems);

redButton.addEventListener("click", () => {
  //   clickedRed = true;
  //   clickedGreen = false;
  //   clickedBlue = false;
  selectedColor = "red";
});

greenButton.addEventListener("click", () => {
  // clickedRed = false;
  // clickedGreen = true;
  // clickedBlue = false;
  selectedColor = "green";
});

blueButton.addEventListener("click", () => {
  // clickedRed = false;
  // clickedGreen = false;
  // clickedBlue = true;
  selectedColor = "blue";
});

allOfTheListItems.forEach((listItem) => {
  listItem.addEventListener("click", () => {
    //console.log("testing");
    listItem.style.backgroundColor = selectedColor;
  });
});
