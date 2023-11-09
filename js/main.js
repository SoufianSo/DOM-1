console.log("%c aufgabe 1_1", "color:red");
function changeBackgroundColor() {
  let elements = document.getElementsByClassName("example");

  for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = "red";
  }
}
console.log("%c aufgabe 1_2", "color:red");

function showContent(selector) {
  let output = document.querySelector("output");
  let selectedElement = document.getElementById("myList")[selector];

  if (selectedElement) {
    output.innerHTML = selectedElement.innerHTML;
  } else {
    output.innerHTML = "Element not found";
  }
}
//-----------Aufgabe1-4
document.getElementById("addButton").addEventListener("click", addElement);

function addElement() {
  let inputField = document.getElementById("inputText");
  let newItemText = inputField.value;

  if (newItemText.trim() !== "") {
    let newListItem = document.createElement("li");
    newListItem.textContent = newItemText;
    document.getElementById("myList").appendChild(newListItem);
    inputField.value = "";
  }
}
//-----------Aufgabe1-9

document.getElementById("button").addEventListener("click", removeColor);

function removeColor() {
  let selectElement = document.getElementById("farbeAuswahlen");
  let selectedIndex = selectElement.selectedIndex;

  if (selectedIndex !== -1) {
    selectElement.options[selectedIndex].remove();
  }
}
