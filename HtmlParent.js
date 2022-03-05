var div = document.createElement("div");
div.className = "parent";
document.body.appendChild(div);

divOlustur("parent", "firstChild", "firstChild");
divOlustur("parent", "child", "2.Cocuk");
divOlustur("parent", "child", "3.Cocuk");
divOlustur("parent", "lastChild", "Son Cocuk");
function divOlustur(location, className, innerHtml) {
    div = document.createElement("div");
    div.className = className;
    div.innerHTML = innerHtml;
    document.getElementsByClassName(location)[0].appendChild(div);

}
// ---------------------------------------------------------
var parent = document.getElementsByClassName("parent")[0];

var firstChild = parent.firstChild;
console.log(firstChild);

var lastChild = parent.lastChild;
console.log(lastChild);

var children = parent.children;
for (let i = 0; i < children.length; i++) {
    const element = children[i];
    console.log(element);
}

var child1 = document.getElementsByClassName("firstChild")[0];
console.log(child1.parentElement);