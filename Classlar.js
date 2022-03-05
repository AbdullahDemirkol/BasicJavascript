class Apartman {
    constructor(beton, tugla, cam) {
        this.beton = beton;
        this.tugla = tugla;
        this.cam = cam;
    }
    BetonCins() {
        EkranaYazdir(this.beton);
        Bosluk();
    }
    TuglaCins() {
        EkranaYazdir(this.tugla);
        Bosluk();
    }
    CamCins() {
        EkranaYazdir(this.cam);
        Bosluk();
    }
}
var apartman = new Apartman("Cimento", "Pirket", "Kirilmaz");
apartman.BetonCins();
apartman.TuglaCins();
apartman.CamCins();
Bosluk();
// ----------------------------------------------
class DortIslem {
    constructor(sayi1, sayi2) {
        this.sayi1 = sayi1;
        this.sayi2 = sayi2;
    }
    Toplama() {
        this.toplamSonuc = this.sayi1 + this.sayi2;
        return this;
    }
    Cikarma() {
        this.cikarmaSonuc = this.sayi1 - this.sayi2;
        return this;
    }
    Carpma() {
        this.carpmaSonuc = this.sayi1 * this.sayi2
        return this;
    }
    Bolme() {
        if (this.sayi2 != 0) {
            this.bolmeSonuc = this.sayi1 / this.sayi2;
        }
        else {
            this.bolmeSonuc = "Tanimsiz";
        }
        return this;
    }
    SonuclariYazdir() {
        EkranaYazdir("Sayilar: " + this.sayi1 + " " + this.sayi2);
        Bosluk();
        EkranaYazdir("Toplama Sonucu: " + this.sayi1 + "+" + this.sayi2 + "=" + this.Toplama().toplamSonuc);
        Bosluk();
        EkranaYazdir("Cikarma Sonucu: " + this.sayi1 + "-" + this.sayi2 + "=" + this.Cikarma().cikarmaSonuc);
        Bosluk();
        EkranaYazdir("Carpma Sonucu: " + this.sayi1 + "*" + this.sayi2 + "=" + this.Carpma().carpmaSonuc);
        Bosluk();
        EkranaYazdir("Bolme Sonucu: " + this.sayi1 + "/" + this.sayi2 + "=" + this.Bolme().bolmeSonuc);
        Bosluk();
    }
}
var islem = new DortIslem(15, 5);
islem.SonuclariYazdir();
Bosluk();

// ----------------------------------------------
class Islemler extends DortIslem {
    constructor(sayi1, sayi2) {
        super(sayi1, sayi2);
    }
    modAlma() {
        this.mod = this.sayi1 % this.sayi2;
        return this;
    }
    IslemlerSonuclariYazdir() {
        EkranaYazdir("Modun Sonucu: " + this.sayi1 + "%" + this.sayi2 + "=" + this.modAlma().mod)
    }
}
var islemler = new Islemler(20, 7);
islemler.SonuclariYazdir();
islemler.IslemlerSonuclariYazdir();
// ----------------------------------------------
function Bosluk() {
    document.write("<br>");
}
function EkranaYazdir(deger) {
    document.write(deger);
}
function ConsoleYazdir(deger) {
    console.log(deger);
}