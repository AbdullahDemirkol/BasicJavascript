var guesses = TakeGuess();
var dice = ProduceDice();
EkranaYazdir("Tahmin Edilen Zarlar: " + guesses[0] + " " + guesses[1]);
Bosluk();
EkranaYazdir("Rastgele Olusan Zarlar: " + dice[0] + " " + dice[1]);
Bosluk();
var result = Compare(guesses, dice);
EkranaYazdir(result);
Bosluk();


function Compare(guesses, dice) {
    var result;
    var totalGuess = guesses[0] + guesses[1];
    var totalDice = dice[0] + dice[1];
    if (totalGuess == totalDice) {
        result = "Tebrikler. Zarlarin Toplami Dogru."
    }
    else if (guesses[0] == dice[0]) {
        result = "Uzgunum. Sadece Ilk Zar Tahmini Dogru.";
    }
    else if (guesses[1] == dice[1]) {
        result = "Uzgunum. Sadece Ikinci Zar Tahmini Dogru.";
    }
    else {
        result = "Uzgunum. Hicbir Zar Tahmini Dogru Degil."
    }
    return result;
}

function TakeGuess() {
    var text1 = "Ilk Zari Tahmin Ediniz:";
    var text2 = "Ikinci Zari Tahmin Ediniz:";
    var guess1 = Guess(text1);
    var guess2 = Guess(text2);
    guess1 = parseInt(guess1);
    guess2 = parseInt(guess2);
    var guesses = [guess1, guess2];
    return guesses;
}

function Guess(text) {
    var bool = false;
    guess = prompt(text);
    while (bool == false) {
        switch (guess) {
            case '1':
                bool = true;
                break;
            case '2':
                bool = true;
                break;
            case '3':
                bool = true;
                break;
            case '4':
                bool = true;
                break;
            case '5':
                bool = true;
                break;
            case '6':
                bool = true;
                break;
            default:
                guess = prompt("Gecersiz Tahmin. " + text);
                bool = false;
        }
    }
    return guess;
}

function ProduceDice() {
    var random1 = Math.random();
    var random2 = Math.random();
    correctedRandom1 = Math.floor(random1 * 100);
    correctedRandom2 = Math.floor(random2 * 100);
    var dice1 = (correctedRandom1 % 6) + 1;
    var dice2 = (correctedRandom2 % 6) + 1;
    var dice = [dice1, dice2];
    return dice;
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