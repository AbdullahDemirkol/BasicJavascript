var div = document.createElement("div");
div.className = "snow";
document.body.appendChild(div);
SnowGenerator(500);

// -----------------------------------------------------------
function animation(element, top) {
    var counter = 0;
    var interval = setInterval(() => {
        element.style.top = (parseInt(element.style.top.split("px")[0]) + (Math.floor(Math.random() * 15))).toString() + "px";
        if (element.style.top.split("px")[0] > window.innerHeight) {
            element.style.top = "0px";
            counter++;
        }
        if (counter > 150) {
            element.style.height = "0px";
            element.style.width = "0px";
            clearInterval(interval);
        }
    }, 5);
}

function SnowGenerator(quantity) {
    var snow;
    for (var counter = 0; counter < quantity; counter++) {
        var snow = document.createElement("div");
        snow.classList.add("snow");
        snow.style.backgroundColor = RandomColorGenerator();
        snow.style.border = "1px solid black";
        snow.style.top = Math.floor((Math.random() * (window.innerHeight - 50))).toString() + "px";
        snow.style.left = Math.floor((Math.random() * (window.innerWidth - 50))).toString() + "px";
        animation(snow);
        document.body.appendChild(snow);
    }
}

function RandomColorGenerator() {
    var elligbleLetters = "ABCDEF0123456789";
    var str = "#";
    for (var counter = 0; counter < 6; counter++) {
        var random = Math.floor(Math.random() * elligbleLetters.length);
        str = str + elligbleLetters.charAt(random);
    }
    return str;
}