// Javascript Koşulları
var email = "abdullah.demirkol@gmail.com";
var adminEmail = "admin@gmail.com";
var yanlisEmail = "deneme@gmail.com";
var sifre = "123456";
Giris(email, sifre);
Giris(adminEmail, sifre);
Giris(yanlisEmail, sifre);
function Giris(email, sifre) {
    if (email == "admin@gmail.com" && sifre == "123456") {
        EkranaYazdir("Admin olarak giris yapildi.");
        Bosluk();
    }
    else if (email == "abdullah.demirkol@gmail.com" && sifre == "123456") {
        EkranaYazdir("Giris yapildi.");
        Bosluk();
    }
    else {
        EkranaYazdir("Email yada sifre yanlis.");
        Bosluk();
    }
}
// ---------------------------------------------------
Bosluk();
EkranaYazdir("Switch Yapisi:");
switch (email) {
    case "admin@gmail.com":
        if (sifre == "123456") {
            EkranaYazdir("Admin olarak giris yapildi.");
            Bosluk();
        }
        break;
    case "abdullah.demirkol@gmail.com":
        if (sifre == "123456") {
            EkranaYazdir("Giris yapildi.");
            Bosluk();
        }
        break;
    default:
        EkranaYazdir("Email yada sifre yanlis.");
        Bosluk();
}
// ---------------------------------------------------
Bosluk();
EkranaYazdir("While Yapisi:");
Bosluk();
var counter = 0;
var result = 0;
var array = [];
while (counter <= 8) {
    result = result + counter;
    EkranaYazdir("Abdullah+" + counter);
    Bosluk();
    if (counter % 2 == 0) {
        array.push(counter);
    }
    counter++;
}
EkranaYazdir(array);
Bosluk();
EkranaYazdir("Toplam:" + result);
Bosluk();
// ---------------------------------------------------
Bosluk();
EkranaYazdir("Do-While Yapisi:");
Bosluk();
counter = 0;
result = 0;
array = [];
do {
    result = result + counter;
    EkranaYazdir("Abdullah+" + counter);
    Bosluk();
    if (counter % 2 == 0) {
        array.push(counter);
    }
    counter++;
} while (counter <= 8);
EkranaYazdir(array);
Bosluk();
EkranaYazdir("Toplam:" + result);
Bosluk();
// ---------------------------------------------------
Bosluk();
EkranaYazdir("For Yapisi:");
Bosluk();
for (let counter = 0; counter < array.length; counter++) {
    const element = array[counter];
    EkranaYazdir(element);
    Bosluk();
    karekokElement = Math.sqrt(element);//Sayının Karekökünü Alır.
    EkranaYazdir("Karekoku:" + karekokElement);
    Bosluk();
    random = Math.random() * 10;//0-10 arasında random sayı üretir.
    yuvarlanmisRandom = Math.floor(random);//random sayiyi virgülden sonrasını siliyor yani virgüllü sayiyi alt sayıya yuvarlar.
    EkranaYazdir("Random Sayi:" + yuvarlanmisRandom);
    Bosluk();
}
// ---------------------------------------------------
Bosluk();
EkranaYazdir("For In Yapisi:");
Bosluk();
var newArray = ["Abdullah", "Demirkol", "Istanbul Gelisim Universitesi", 22]
for (const key in newArray) {
    EkranaYazdir(key + ".Indexteki deger:");
    if (Object.hasOwnProperty.call(newArray, key)) {
        const element = newArray[key];
        EkranaYazdir(element);
        Bosluk();
    }
}
// ---------------------------------------------------
Bosluk();
EkranaYazdir("Try-Catch Yapisi:");
Bosluk();
try {
    n1;
} catch (error) {
    EkranaYazdir(error);
}
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