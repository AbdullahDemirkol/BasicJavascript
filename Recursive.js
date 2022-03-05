var counter = 0;
var stop = 20;
islem1(stop);
function islem1(stoppage) {
    if (stoppage < counter) {
        return 0;
    } else {
        islem2(counter++);
    }
}

function islem2(counter) {
    EkranaYazdir(counter + " . Dongu");
    Bosluk();
    islem1(stop);
}
// ---------------------------------------------------
var toplam = function (x, y) {
    return x + y;
}(5, 8);
EkranaYazdir(toplam);
Bosluk();
var toplam2 = function (x, y) {
    return x + y;
};
EkranaYazdir(toplam2(5, 9));
Bosluk();

counter = 0;
var interval = setInterval(function () {
    counter++;
    if (counter >= 10) {
        clearInterval(interval);
    }
    EkranaYazdir(counter + " Saniye gecti.");
    Bosluk();
}, 1000);
// ---------------------------------------------------
function Bosluk() {
    document.write("<br>");
}
function EkranaYazdir(deger) {
    document.write(deger);
}
function ConsoleYazdir(deger) {
    console.log(deger);
}