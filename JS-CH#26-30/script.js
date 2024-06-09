// function inputValue() {
//   return document.getElementById("inputText").value;

// }
// Doing This Assignment again 27 / 05 /2024
// Doing Round Button again
function roundNumber() {
  let valByUser = document.getElementById("inputText").value;

  if (!valByUser) {
    alert("enter something");
    return;
  }

  let done = Math.round(valByUser);
  document.getElementById("output").innerHTML = done
}
// Doing Button ceil again
function ceilANumber() {
  let valByUser = document.getElementById("inputText").value;

  if (!valByUser) {
    alert("enter something");
    return;
  }

  let done = Math.ceil(valByUser);
  document.getElementById("output").innerHTML = done;
}
// Doing Button Floor again
function floorANumber() {
  let valByUser = document.getElementById("inputText").value;

  if (!valByUser) {
    alert("enter something");
    return;
  }

  let done = Math.floor(valByUser);
  document.getElementById("output").innerHTML = done;
}
// Doing Button Random gen. again
function generateANumber() {
  // let rr = Math.random();
  let generating = Math.random();

  document.getElementById("output").innerHTML = generating;
}
// function clearSt() {
//   document.getElementById("inputText").value = "";
//   document.getElementById("Output").innerHTML= "";
// }
// Doing Throwing A Dice Again
function throwingDice() {
  let generating = Math.random();
  let dice = (generating * 6) + 1;
  dice = Math.floor(dice);

  document.getElementById("output").innerHTML = dice;
}

// Doing Throwing A Dice Again

function generatePass() {
  let symbols = "ASDFGHJKLQWERTYUIOPXZXCVBNM<>~!@#$%^&*()";
  let pass = "";


  let limit = prompt("enter num");
  // console.log(limit.length); 

  for (let i = 0; i < limit; i++) {
    let gen = Math.floor(Math.random() * symbols.length);
    pass += symbols.charAt(gen);
    console.log(pass);

    document.getElementById("output").innerHTML = pass;
  }
}
// Doing Converting Strings Again
function convertingStrings() {
  let num = "25.12345";
  // num = parseInt(num);
  // num = parseFloat(num);
  // num = Number(num);
  // num = num.toFixed(2);
  // num = Number(num);
  // console.log(num);
  // console.log(typeof num);
}
// Doing GST Strings Again

// function calculatingGst(){
//   let cost = +prompt("Enter Your Cost");
//   cost = Number(cost);

//   if (!cost) {
//     alert("Enter Cost First");
//   }
  
//   let percent = 17 %
//   // percent = Number(percent);
//   // console.log(typeof percent);
// }

// function roundNumber() {
//   if (!inputValue()) {
//     alert("Enter Any Number")
//   }
//   let value = inputValue();
//   let rounded = Math.round(value);
//   document.getElementById("output").innerHTML = rounded;
//   console.log(rounded);
// }

// function ceilANumber() {
//   let value = inputValue();
//   let ceil = Math.ceil(value);
//   document.getElementById("output").innerHTML = ceil;
//   console.log(ceil);
// }

// function floorANumber() {
//   let value = inputValue();
//   let flr = Math.floor(value);
//   document.getElementById("output").innerHTML = flr;
//   console.log(flr);
// }

// function generateANumber() {
//   let randomNumber = Math.random();
//   randomNumber = randomNumber.toString();

//   randomNumber = randomNumber.slice(2);
//   console.log(typeof randomNumber);

//   console.log(randomNumber);
//   document.getElementById("output").innerHTML = "<h4>" + randomNumber + "</h4 > " + "<h6> Random Number Generated </h6>";
// }

// function throwingDice() {
//   let dice = Math.floor(Math.random() * 6) + 1;
//   // dice = Math.floor
//   document.getElementById("output").innerHTML = dice + "</br> <h6 class='dice-info'>Dice Generated</h6>";
//   console.log(dice);
// }

// function randomString() {
//   let possibleString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`!@#$%^&*()_+|{}:<>?[];',./1234567890";
//   let password = "";

//   for (i = 0; i < 32; i++) {
//     let randomNumber = Math.floor(Math.random() * possibleString.length);
//     password += possibleString.charAt(randomNumber);
//   }

//   document.getElementById("output").innerHTML = password;
// }

// function controllingStrings() {
//   // let value = inputValue();
//   // let num = "251.92848";
//   // // console.log(num)
//   // // console.log(typeof num);
//   // // num = parseInt(num);
//   // // console.log(typeof num);
//   // // num = parseFloat(num);
//   // // console.log(num);
//   // num = Number(num);
//   // console.log(num);
//   let value = inputValue();
//   let num = parseFloat(value);
//   document.getElementById("output").innerHTML = num + "<h4>Srting changed to Number</h4>";
//   console.log(typeof num);
// }

// function controllingLength() {

//   let value = inputValue();
//   num = parseFloat(value).toFixed(2);
//   document.getElementById("output").innerHTML = num + "<br/>Changed";
// }

// //Formula to Calculate Tax  | cost*(tax/100) |
function calculatingGst() {
  let cost = +prompt("Enter Cost");
  // cost = Number(cost);
  cost = Number(cost);

  if (!cost) {
    alert("Enter a Value First");
    return;
  }

  // console.log(typeof cost);

  let taxInput = prompt("Enter Tax Rate");

  if (!taxInput && taxInput !== 0) {
    alert("Enter a Valid Tax Rate");
    return;
  }

  let tax = cost*(taxInput / 100);
  // tax = Number(taxInput)
  // tax = Number(tax);
  
  let total = cost + tax;
  total = Math.round(total);
  // tax = Number(total);

  document.getElementById("output").innerHTML += "Your amount =" + cost + "<br/>Tax =" + taxInput + "%" + "<br/>Total Amount Including Tax =<br/>" + total;
}




























































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































