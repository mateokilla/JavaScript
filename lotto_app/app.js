const addBtn = document.getElementById("add-btn");
const playBtn = document.getElementById("play-btn");
const userNumberList = document.getElementById("user-numbers");
const machineNumbersList = document.getElementById("machine-numbers");
let userNumbers = [];
let machineNumbers = [];
let isEnough = false;

addBtn.addEventListener("click", function addNumber(e) {
  e.preventDefault();
  inputNumber = document.getElementById("input-number").value;
  if (userNumbers.length < 5) {

    userNumbers.push(inputNumber);
    userNumberList.innerHTML = userNumbers;
  }
});
