//The HTML DOM is a standard for how to get, change, add, or delete HTML elements.
// HTML DOM (Document Object Model)
// -The HTML elements as objects
// -The properties of all HTML elements
// -The methods to access all HTML elements
// -The events for all HTML elements

//Finding HTML elements (Methods)
//getElementById('id') (most common used)
const fullName = {
  lastName: "John",
  firstName: "Smith",
};
const title = (document.getElementById("title").innerHTML = "This is a title!");
const paragraph = document.getElementById("demo");
paragraph.innerHTML =
  "Hello " + `${fullName.lastName}` + " " + `${fullName.firstName}` + "!";
//getElementsByTagName('name')
//getElementsByClassName('name')
//querySelector() first element
//querySelectorAll() all elements

//Changing HTML elements
//innerHTML =
//style.property = 'new value'

//Adding and Deleting elements
//createElement(element)
//removeChild(element)
//appendChild(element)
//document.write(text)

//Changing a value of an attribute
const imageData = {
  src: "https://images.unsplash.com/photo-1677607240655-3bc840ede271?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  alt: "Mountains",
};
const image = document.getElementById("image");
image.src = imageData.src;
image.alt = imageData.alt;
//image.style.width = "200px"; //changing HTML element style

//addEventListener() method
// -click, mouseover, mouseout

const btn = document
  .getElementById("btn")
  .addEventListener("click", changeImageSizeOnes);

function changeImageSizeOnes() {
  document.getElementById("image").style.width = "400px";
}

//styling with className
//image variable is already existing

const btn2 = document
  .getElementById("btn2")
  .addEventListener("click", changeImageSizeManyTimes);

let toggleValue = false;

function changeImageSizeManyTimes() {
  toggleValue = !toggleValue;
  if (toggleValue === true) {
    image.className = "large";
  } else {
    image.className = "small";
  }
}


let tablazat = document.querySelector("#tablazatocska");

for (i=0;i<10;i++){
  tablazat+= '<tr>'
  for(let j = 0;j<10;j++){
    tablazat+='<td>' + j + '</td>'
  }
  tablazat+='</tr>'
}

