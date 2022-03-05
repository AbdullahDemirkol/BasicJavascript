div = document.createElement("div");
div.id = "numara";
document.body.appendChild(div);

div = document.createElement("div");
div.className = "sinif";
document.body.appendChild(div);

var nav = document.createElement("nav");
document.body.appendChild(nav);
// --------------------------------------------------------------
var id = document.getElementById("numara");
var sinif = document.getElementsByClassName("sinif")[0];
var isim = document.getElementsByName("isim")[0];
var navbar = document.getElementsByTagName("nav")[0];

id.innerHTML = "getElementById";
sinif.innerHTML = "getElementsByClassName";
isim.innerHTML = "getElementsByName";
navbar.innerHTML = "getElementsByTagName";
id.style.backgroundColor = "#FF0000";
id.style.color = "green";
id.style.margin = "10px 0px 20px 30px";
id.style.padding = "10px 0px 20px 30px";
// id.style.transform="rotate(2deg)"; //derece giriyosun.
id.style.transform = "skew(20deg)";
id.style.fontSize = "30px";

isim.style.transform = "translateX(50%) translateY(50%)";
isim.style.top = "50%";
isim.style.left = "50%";
isim.style.backgroundColor = "purple";
isim.style.width = "15%";
// isim.style.display = "none";

sinif.style.backgroundColor = "black";
sinif.style.color = "white";
sinif.style.position = "fixed";
sinif.style.left = "50%";

navbar.style.backgroundColor = "yellow";
navbar.style.color = "red";
navbar.style.backgroundImage = "url(https://www.asanatlar.com/wp-content/uploads/2020/08/AMALIA-MARIA-ISTRATE-Rengarenk-Resimler-1.jpg)";
navbar.style.height = "500px";
navbar.style.width = "660px";