// Creating a new list item
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("listInput").value;
    let t = document.createTextNode(inputValue);
    ul.appendChild(t);
    //alert for empty value
    if (inputValue === '') {
        alert("add list item");
    } else {
        document.getElementsById("list").appendChild(li);
    }
    document.getElementById("listInput").value = "";

    /*
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    */

}

// creating a "close" button
let btn = document.getElementsByTagName("li");
let i;
for (i = 0; i < list.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00d7");
    span.className = "close";
    span.appendChild(txt);
    list[i].appendChild(span);
}

// close action for created "close" button
let close = document.getElementsByClassName("close");
let j; 
for (i = 0; j < close.length; j++) {
    close[j].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";

    }
}

// checked symbol
let list = document.querySelector("ul");
list.addEventListener('click', function(ev {
    if (ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

