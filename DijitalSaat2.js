var div = document.createElement("div");
div.className = "DijitalSaatContainer";
document.body.appendChild(div);

divOlustur("DijitalSaatContainer", "Date");
divOlustur("DijitalSaatContainer", "DijitalSaat", "Hours");
divOlustur("DijitalSaatContainer", "DijitalSaat", "Minutes");
divOlustur("DijitalSaatContainer", "DijitalSaat", "Seconds");


var dijitalSaatDiv = document.getElementsByClassName("DijitalSaat");
var hours, minutes, seconds, date;
setInterval(() => {
    var date = new Date();
    hours = ChangeFormat(date.getHours());
    document.getElementsByClassName("Hours")[0].innerHTML = hours;
    dijitalSaatDiv[0].style.color = randomColorGenerator();
    minutes = ChangeFormat(date.getMinutes());
    document.getElementsByClassName("Minutes")[0].innerHTML = minutes;
    dijitalSaatDiv[1].style.color = randomColorGenerator();
    seconds = ChangeFormat(date.getSeconds());
    document.getElementsByClassName("Seconds")[0].innerHTML = seconds;
    dijitalSaatDiv[2].style.color = randomColorGenerator();
    date = ChangeFormat(date.getDate()) + " - " + ChangeFormat(date.getMonth() + 1) + " - " + ChangeFormat(date.getFullYear());
    document.getElementsByClassName("Date")[0].innerHTML = date;

}, 1000);
// --------------------------------------------
function ChangeFormat(unit) {
    var unitLength = String(unit).length;
    if (unitLength < 2) {
        return "0" + unit;
    }
    else {
        return unit;
    }
}
function randomColorGenerator() {
    var elligbleLetters = "ABCDEF0123456789";
    var str = "#"
    for (var counter = 0; counter < 6; counter++) {
        var random = Math.floor(Math.random() * 16);
        str += elligbleLetters.charAt(random);
    }
    return str;
}
function divOlustur(location, className1, className2) {

    div = document.createElement("div");
    if (className2 != null) {
        div.className = className1 + " " + className2;
    }
    else {
        div.className = className1;
    }
    div.style.margin = "5px";
    document.getElementsByClassName(location)[0].appendChild(div);
}