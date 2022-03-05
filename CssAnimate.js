var id = document.getElementById("numara");
id.style.color = "white";
id.style.height = "200px";
id.style.width = "300px";
id.style.position = "fixed";
id.style.top = "1px";
id.style.left = "1px";
id.style.backgroundImage = "url(https://www.asanatlar.com/wp-content/uploads/2020/08/AMALIA-MARIA-ISTRATE-Rengarenk-Resimler-1.jpg)";

var isReverseTop = false;
var isReverseLeft = false;
function animate(element, top, left) {
    var topOfElement = parseInt(element.style.top.split("px")[0]);
    //console.log(leftOfElement);
    if (topOfElement >= (window.innerHeight - parseInt(element.style.height.split("px")))) {
        isReverseTop = true;
    } else if (topOfElement <= 0) {
        isReverseTop = false;
    }
    element.style.top = (top + topOfElement).toString() + "px";
    var leftOfElement = parseInt(element.style.left.split("px")[0]);
    //console.log(leftOfElement);
    if (leftOfElement >= (window.innerWidth - parseInt(element.style.width.split("px")))) {
        isReverseLeft = true;
    } else if (leftOfElement <= 0) {
        isReverseLeft = false;
    }
    element.style.left = (left + leftOfElement).toString() + "px";
}
var timer = setInterval(function () {
    if (isReverseTop == true && isReverseLeft == true) {
        animate(id, -1, -2);
    } else if (isReverseTop == false && isReverseLeft == true) {
        animate(id, 1, -2);
    } else if (isReverseTop == true && isReverseLeft == false) {
        animate(id, -1, 2);
    } else if (isReverseTop == false && isReverseLeft == false) {
        animate(id, 1, 2);
    }
}, 10);
//clearInterval(timer);