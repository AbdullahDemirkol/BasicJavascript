var buttonDiv = document.createElement("div");
buttonDiv.id = "button";
document.body.appendChild(buttonDiv);
var div = document.createElement("div");
div.id = "Container";
document.body.appendChild(div);

DivOlustur("Container", "pTextContainer");
DivOlustur("Container", "buttonContainer");
DivOlustur("Container", "imageContainer");

function DivOlustur(location, id) {
    div = document.createElement("div");
    div.id = id;
    document.getElementById("Container").appendChild(div);
}
// ---------------------------------------------------------
var button1 = document.createElement("button");
button1.innerHTML = "Butona Tikla";
button1.onclick = function () {
    console.log('Butona Tiklandi.');
}
button1.onmouseenter = function () {
    console.log('Fare Ustune Geldi.');
}
button1.onfocus = function () {
    console.log('Focus Ozelligi Aktif');
}
button1.ondblclick = function () {
    alert('Butona 2 Kez Tiklandi.');
}
document.getElementById("button").appendChild(button1);
// ---------------------------------------------------------
var button2 = document.createElement("button");
button2.innerHTML = "Button Uretildi";
button2.onload = function (event) {
    alert("Button Uretildi.");
}
document.getElementById("buttonContainer").appendChild(button2);
// ---------------------------------------------------------
var ptext = document.createElement("p");
ptext.innerHTML = "Yazi Uretildi.";
document.getElementById("pTextContainer").appendChild(ptext);
// ---------------------------------------------------------
var img = document.createElement("img");
img.src = "https://i.ytimg.com/vi/wUN6Ffli33U/maxresdefault.jpg";
img.style.width = "100%";
img.style.height = "auto";
img.alt = "Resim Uretildi.";
img.onclick = function () {
    window.open("https://www.google.com");
}
document.getElementById("imageContainer").appendChild(img);
// ---------------------------------------------------------
var footer = document.createElement("footer");
footer.innerHTML = "Footer Uretildi.";
document.body.appendChild(footer);
// ---------------------------------------------------------