var x = 10;
var y = 30;

var text1 = "Abdullah";
var text2 = " Demirkol";
var total = text1 + text2;
EkranaYazdir(total);
Bosluk();
EkranaYazdir(x + y);
ConsoleYazdir(x + y);
confirm(x + y);
alert(x + y);
// ----------------------------------------------
var newDate = new Date();
EkranaYazdir(newDate);
Bosluk();
// ----------------------------------------------
var sayi = 10;
var text = "Merhaba";
var bool = true;
var array = [30, 10, 20, 45, 40, "Merhaba", true];
var json = { "date": "2022" }
EkranaYazdir(bool);
Bosluk();
// ----------------------------------------------
EkranaYazdir(array);
ConsoleYazdir(array);
Bosluk();
EkranaYazdir(array[0]);
Bosluk();
array.push(0.15);//arraye değer ekler
EkranaYazdir(array);
Bosluk();
array.pop();//arrayin son değerini siler
EkranaYazdir(array);
Bosluk();
var newArray = array.slice(1, 5);//arrayi istediğiniz değerleri alıp yeni bir array oluşturur
EkranaYazdir(newArray);
ConsoleYazdir(newArray);
Bosluk();
var stringArray = array.toString();//arrayi stringe çevirir
EkranaYazdir(stringArray);
ConsoleYazdir(stringArray);
Bosluk();
array.sort();//arrayi küçükten büyüğe göre ve alfabeye göre sıralar
EkranaYazdir(array);
Bosluk();
array.reverse(array);//arrayi ters çevirir
EkranaYazdir(array);
Bosluk();
var length = array.length;//arrayin uzunluğunu verir
EkranaYazdir(length);
Bosluk();
// ----------------------------------------------
ConsoleYazdir(json);
EkranaYazdir(json);
Bosluk();
EkranaYazdir(json.date);
Bosluk();
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

