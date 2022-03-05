var date = new Date();
var hour = date.getHours();
var minute = date.getMinutes();
var second = date.getSeconds();
var day = date.getDate();
var month = date.getMonth();
var year = date.getFullYear();
var days;


function ChangeFormat(unit) {
    var unitLength = String(unit).length;
    if (unitLength < 2) {
        return "0" + unit;
    }
    else {
        return unit;
    }
}
function ChangeDayFormat(day) {
    days = day % 7;
    var result;
    switch (days) {
        case 0:
            result = "Pazartesi";
            break;
        case 1:
            result = "Sali";
            break;
        case 2:
            result = "Carsamba";
            break;
        case 3:
            result = "Persembe";
            break;
        case 4:
            result = "Cuma";
            break;
        case 5:
            result = "Cumartesi";
            break;
        case 6:
            result = "Pazar";
            break;
        default:
            result = "Hata";
    }
    return result;
}
function ChangeMonthFormat(month) {
    var result;
    switch (month) {
        case 0:
            result = "Ocak";
            break;
        case 1:
            result = "Subat";
            break;
        case 2:
            result = "Mart";
            break;
        case 3:
            result = "Nisan";
            break;
        case 4:
            result = "Mayis";
            break;
        case 5:
            result = "Haziran";
            break;
        case 6:
            result = "Temmuz";
            break;
        case 7:
            result = "Agustos";
            break;
        case 8:
            result = "Eylul";
            break;
        case 9:
            result = "Ekim";
            break;
        case 10:
            result = "Kasim";
            break;
        case 11:
            result = "Aralik";
            break;
        default:
            result = "Hata";
    }
    return result;
}
function increase_second(second) {
    second = parseInt(second) + 1;
    if (second > 59) {
        minute = increase_minute(minute)
        second = 0;
    }
    return second;
}
function increase_minute(minute) {
    minute = parseInt(minute) + 1;
    if (minute > 59) {
        hour = increase_hour(hour)
        minute = 0;
    }
    return minute;
}
function increase_hour(hour) {
    hour = parseInt(hour) + 1;
    if (hour > 23) {
        day = increase_day(day, month, year)
        hour = 0;
    }
    return hour;
}
function increase_day(day) {
    day = parseInt(day) + 1;
    if (day > 31) {
        month = increase_month(month);
        day = 1;
    }
    if (year % 4 == 0) {
        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            if (day > 31) {
                month = increase_month(month);
                day = 1;
            }
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            if (day > 30) {
                month = increase_month(month);
                day = 1;
            }
        } else if (month == 1) {
            if (day > 29) {
                month = increase_month(month);
                day = 1;
            }
        }
    }
    else {
        if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
            if (day > 31) {
                month = increase_month(month);
                day = 1;
            }
        } else if (month == 3 || month == 5 || month == 8 || month == 10) {
            if (day > 30) {
                month = increase_month(month);
                day = 1;
            }
        } else if (month == 1) {
            if (day > 28) {
                month = increase_month(month);
                day = 1;
            }
        }
    }
    return day;
}
function increase_month(month) {
    month = parseInt(month) + 1;
    if (month > 11) {
        year = increase_year(year);
        month = 0;
    }
    return month;
}
function increase_year(year) {
    year = parseInt(year) + 1;
    return year;
}

function ChangeTime(hour, minute, second, dayName, monthName, year, day, month) {
    console.clear();
    ConsoleYazdir("Saniye: " + second);
    ConsoleYazdir("Dakika: " + minute);
    ConsoleYazdir("Saat: " + hour);
    ConsoleYazdir("Gun: " + dayName);
    ConsoleYazdir("Ay: " + monthName);
    ConsoleYazdir("Yil: " + year);
}
var dijitalSaat = setInterval(function () {
    second = increase_second(second);
    dayName = ChangeDayFormat(day);
    monthName = ChangeMonthFormat(month);
    hour = ChangeFormat(hour);
    minute = ChangeFormat(minute);
    second = ChangeFormat(second);
    ChangeTime(hour, minute, second, dayName, monthName, year);
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