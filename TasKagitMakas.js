class TasKagitMakas {
    constructor() {
        this.options = ["Tas", "Kagit", "Makas"];
    }
    Oyuncu1() {
        var hand = Math.floor(Math.random() * 3);
        var result = this.options[hand];
        this.firstResult = result;
        EkranaYazdir("1.Oyuncu " + this.firstResult + " Yapti.");
        Bosluk();
        return this;
    }
    Oyuncu2() {
        var hand = Math.floor(Math.random() * 3);
        var result = this.options[hand];
        this.secondResult = result;
        EkranaYazdir("2.Oyuncu " + this.secondResult + " Yapti.");
        Bosluk();
        return this;
    }
    SonuclariKarsilastir() {
        if (this.firstResult == "Tas" && this.secondResult == "Kagit") {
            return 2;
        }
        else if (this.firstResult == "Tas" && this.secondResult == "Makas") {
            return 1;
        }
        else if (this.firstResult == "Kagit" && this.secondResult == "Tas") {
            return 1;
        }
        else if (this.firstResult == "Kagit" && this.secondResult == "Makas") {
            return 2;
        }
        else if (this.firstResult == "Makas" && this.secondResult == "Tas") {
            return 2;
        }
        else if (this.firstResult == "Makas" && this.secondResult == "Kagit") {
            return 1;
        }
        return 0;
    }
    Beraberlik() {
        EkranaYazdir("Berabere. Oyun Tekrar Oynaniliyor.");
        Bosluk();
        this.Oyuncu1().Oyuncu2();
    }
    OyunuOyna() {
        var sonuc = this.Oyuncu1().Oyuncu2().SonuclariKarsilastir();
        while (sonuc == 0) {
            this.Beraberlik();
            var sonuc = this.SonuclariKarsilastir();
        }
        Bosluk();
        EkranaYazdir(sonuc + ".Oyuncu Kazandi");
    }
}
var tasKagitMakas = new TasKagitMakas();
tasKagitMakas.OyunuOyna();

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