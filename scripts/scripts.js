/* Adding a function for ticking off an item */
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

/* Create remove symbol ("cross") button */
function removeSymbol(){
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "remove";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }
}

removeSymbol();

/* Click on the remove button */
var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
  removeSymbol();
}

/* Adding a new item to the list */
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

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "remove";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}