// var button = document.getElementsByTagName("button")[0];

// button.addEventListener("click", function() {
//     console.log("CLICK!!!!")
// });
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var liItems = document.querySelectorAll(".red");
var deletebtn = document.querySelectorAll(".pad");

function inputLength() {
    return input.value.length;
};

function createListElement() {
    var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value ="";
};

function addListAfterClick() {
    if (inputLength() > 0) {
         createListElement();
    }
};
function addListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
         createListElement();
    }
};
function buttonget(event) {
    document.querySelectorAll('button.pad').forEach(el => {
        el.onclick = () => deleteItem(el);
    })
};
function deleteItem(e) {
    e.parentElement.remove();
};
 var listItems = liItems.length;
//  var delbutton = deletebtn.length;

button.addEventListener("click",addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
for (let i = 0; i < listItems; i++) {
    liItems[i].addEventListener("click",function addClassAfterClick() {
        liItems[i].classList.toggle("done");
    });   
}
window.addEventListener("DomContentLoaded",buttonget);