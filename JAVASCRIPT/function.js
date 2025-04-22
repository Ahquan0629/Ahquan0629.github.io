//alert('This is external JS');

function addition() {
    let a = 25;
    let b = 10;

    console.log(a + b);
}

function subsition(a, b) {

    console.log(a - b);
}

function multiplication() {
    let a = 6;
    let b = 8;

    let result = a * b;

    console.log(result);

}

function division(a, b) {

    console.log(a / b);
}

function Countdown() {
    let Countdown = 10;

    while (Countdown > 0) {
        console.log("Countdown " + Countdown);
        Countdown--;
    }
    console.log("SELAMAT HARI RAYA AIDILFITRI");
}

//Assignment Opperator
function login() {
    let username = prompt("Enter your username");
    let password = prompt("Enter your password");

    if ((username == "fareez" && password == "123456") || (username == "admin" && password == "123456")) {
        console.log("Success")
        alert("Welcome" + username);
    } else {
        alert("Wrong username");
    }

}

const num = prompt("Please Enter your number");

if (num >= 10 && num <= 20) {
    alert("The number is between 10 and 20");
} else {
    alert("The number is not between 10 and 20");
}

function markah() {
    var markahPenuh = 50;
    let markah1 = prompt("Enter markah 1");
    let markah2 = prompt("Enter markah 2");
    let markah3 = prompt("Enter markah 3");
    var markahLabtask = {
        item: [
            { criteria: "TASK 1", mark: Number(markah1) },
            { criteria: "TASK 2", mark: Number(markah2) },
            { criteria: "TASK 3", mark: Number(markah3) }
        ],
        total: 0
    };

    for (var i = 0; i < markahLabtask.item.length; i++) {
        markahLabtask.total += markahLabtask.item[i].mark;
    }
    var percent = markahLabtask.total / markahPenuh * 100

    console.log("Total Marks :" + markahLabtask.total);
    console.log("Percentage : " + percent);
}

function checkPassword() {
    let password = prompt("Please enter your password");
    if (Number(password)) {
        if (password.length >= 8) {
            console.log("Strong password:");
        } else {
            console.log("Weak password");
            checkPassword();
        }
    } else {
        console.log("Enter number only");
    }
}

function checkUmur(){
    let umur = prompt("Please enter your age");
    if (umur < 13) {
        console.log('kanak-kanak');
        alert('kanak-kanak');
    } else if ((umur >= 13) && (umur < 19)) {
        console.log('remaja');
        alert('remaja');
    } else if ((umur >= 19) && (umur < 56)) {
        console.log('dewasa');
        alert('dewasa');
    } else {
        console.log('warga emas');
        alert('warga eams');
    }
}

function ChekcIC(){
    let umur = prompt("Please enter your age");
    let adaKadPengenalan = confirm("Please enter your ic");
    if(umur >= 18){
        if(adaKadPengenalan){
            console.log("Anda dibenarkan Masuk")
        }else{
            console.log("Anda perlu membawa kad pengenalaan untuk masuk");
        }
    }else{
        console.log("Anda tidak diebenarkan mausk.");
    }
}

function checkSaiz(){
    let saiz = prompt("Please enter your saiz");
    switch(saiz){
        case 'S':
        case 'M':
        console.log('Size kecil')
        break;
        case 'L':
        case 'XL':
        console.log('size biasa');
        break;
        default:
        console.log('size besar');
    }
}

function Number(){
    let number = prompt("Please Enter your Number");
    let modulus = number % 2;

    if (modulus ==1){
        console.log('Odd Number')
    }else if(modulus ==0){
        console.log('Even Number')
    }else{
        console.log('Please insert a number')
    }
}

