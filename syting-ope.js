
// String olarak verilen isim ve soyismin sadece bas harflerini Uppercase'e cevirme.
// for döngüsüyle her kelimenin sıfırıncı karaterini büyük harf yapıyoruz.

const nameSurname = "adem aktekin";
let nameSurnameList = nameSurname.split(" ");
for (let indexOfList = 0; indexOfList < nameSurnameList.length; indexOfList++) {
    nameSurnameList[indexOfList] = nameSurnameList[indexOfList].charAt(0).toUpperCase() + nameSurnameList[indexOfList].slice(1);
}
let upperFirstLetter = nameSurnameList.join(" ");
console.log(upperFirstLetter);

// 10X10 kare şeklinde sayılar yazma

let numberList = [];
for (var i = 0; i <= 100; i++) {
    numberList.push(i);
    if (i % 10 == 0) {
        numberList.push("\n")
    }
}
console.log(numberList.join(','));

// Asal sayilari bulmak için (max. değer 100)
// 2den başlayıp bir artırarak gidiyoruz, kendisine ve 1e bölünebilenler listeleniyor.

const MAX_BOUNDARY = 100;
for (let primeNumber = 2; primeNumber < MAX_BOUNDARY; primeNumber++) {
    let controlPrime = true;
    for (let divisorNumber = 2; divisorNumber < primeNumber; divisorNumber++) {
        if (primeNumber % divisorNumber == 0) {
            controlPrime = false;
            break;
        }
    }
    if (controlPrime) {
        console.log(primeNumber);
    }
}

// 50 adet password oluşturma
// password sayısı, max. ve min. uzunluğu ve karakterleri tanımlıyoruz.
// 0dan başlıyoruz, randam karakterler atıyoruz. 

const NUMBER_OF_PASSWORD = 50;
const PASSWORD_MAX = 8;
const PASSWORD_MIN = 16;
const charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz.!'^+%&/()=?_";
for (let index = 0; index < NUMBER_OF_PASSWORD; index++) {
    let passwordLength = Math.floor(Math.random() * (PASSWORD_MAX - PASSWORD_MIN)) + PASSWORD_MIN;
let randomPassword = '';
for (let passwordIndex = 0; passwordIndex < passwordLength; passwordIndex++) {
    let randomNumber = Math.floor(Math.random() * charset.length);
    randomPassword += charset.substr(randomNumber,1);
}
console.log(`Password: ${randomPassword}`);
}

// Yarım noel ağacı

let starList = [];
const MAX_STAR = 6;
const YILDIZ = "*";
for (let startIndex = 0; startIndex < MAX_STAR; startIndex++) {
    starList.push(YILDIZ)
    console.log(starList.join(""))
}