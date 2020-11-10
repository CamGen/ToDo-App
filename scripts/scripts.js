/* Adding a function for checking an item */
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newItem() {
    let listItem = document.createElement("li");
    let inputItem = document.getElementById("inputItem").value;
    let textInput = document.createTextNode(inputItem);
    listItem.appendChild(textInput);
    if (inputItem === "") {
        alert("Please enter an item description!");
    } else {
        document.getElementById("itemList").appendChild(listItem);
    }
    document.getElementById("inputItem").value = "";
}