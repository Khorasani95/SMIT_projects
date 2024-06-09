// // let city0 = "Makkah";
// // let city1 = "Maddina";
// // let city2 = "Jaddah";
// // let city3 = "Riyadh";
// // let city4 = "Qubaa";
// // let city5 = "Faisalabad";
// // let city6 = "Lahore";
// // let city7 = "Islamabad";

let cities = ["Makkah", "Maddina", "Jaddah", "Riyadh", "Qubaa", "Faisalabad", "Lahore", "Islamabad",];
// // console.log(cities[2], cities[1]);
// // cities[4] = "Bhakkar";
// // cities.pop("Makkah");last se remove
// // cities.unshift("khicchi"); //Start me Add krne keliye

// // cities.push("Fsd");End me Add krne keliye
// // let copyOfCities2 = cities.pop("Islamabad");
// // console.log(cities);

// // console.log(cities[3]);
// // cities.unshift("Fsd");/

// // let inputText = document.getElementById("inputText").value;
// // value Js ki trafa se he

// //Simple Alert
// function simpleAlert() {
//   alert("I am an Alert");
// }
// // Print my name button
// function myName() {
//   // alert("Print your Name");
//   let myName = document.getElementById("inputText").value;

//   if (!myName) {
//     alert("Print Your Name First");
//     return;
//   }

//   document.getElementById("Output").innerHTML = myName;
// }


// Simple ALert Button Again Date 24/05/2024

function clearOutput() {
  document.getElementById("inputText").value = " ";
  document.getElementById("Output").innerHTML = "";
}

function simpleAlert() {
  alert("Welcome !!");
}
// Doing Print My Name Button Again Date 24 /05 / 2024
function myName() {

  document.getElementById("inputText").innerHTML = "";

  myName = document.getElementById("inputText").value;

  if (!myName) {
    alert("Enter Your Name First");
    return;
  }

  document.getElementById("Output").innerHTML = '  <span style = " color : green ; " > "  ' + myName + ' " </span> ' + "is  Successfully   added";
}
// Doing All Cities Function Again Date 24 /05 / 2024
let num;
function printAllCities() {
  document.getElementById("Output").innerHTML = "";

  for (index = 0; index < cities.length; index++) {
    num = index + 1;

    document.getElementById("Output").innerHTML += num + ")" + cities[index] + "<br>";
  }
}

// Doing Adding City in list
// // Print Cities Button Again Date 24 /05 / 2024
function addCities() {
  // document.getElementById("Output").innerHTML = "";

  let userValue = prompt('Enter Your City');

  if (!userValue) {
    alert("Enter Your City Name");
    return;
  }

  let addingUserValue = cities.push(userValue);
  for (i = 0; i < cities.length; i++) {

    console.log(cities[i]);
  }

  document.getElementById("Output").innerHTML = userValue

}
// let cities = [
//   "Makkah",
//   "Maddina",
//   "Jaddah",
//   "Riyadh",
//   "Qubaa",
//   "Faisalabad",
//   "Lahore",
//   "Islamabad",
// ];

// function printAllCities() {
//   document.getElementById("Output").innerHTML = " ";
//   for (let index = 0; index < cities.length; index++) {
//     // let cities = cities[index];
//     // document.getElementById("printAllCities").innerHTML = cities;
//     document.getElementById("Output").innerHTML +=
//       index + 1 + ")" + cities[index] + "<br />";
//   }
// }

// // Add City Button
// function addCities() {
//   document.getElementById("Output").innerHTML = " ";
//   document.getElementById("inputText").innerHTML = " ";

//   let city = document.getElementById("inputText").value;

//   if (!city) {
//     alert("Add City");
//     return;
//   }
//   document.getElementById("Output").innerHTML = " ";

//   document.getElementById("Output").innerHTML =
//     '<p><span style="color:green;">' +
//     '"' +
//     city +
//     '"' +
//     "</span> has successfully been added into list </p>";
//   cities.push(city);
// }
// // Generete Table
// function generateTable() {
//   document.getElementById("Output").innerHTML = " ";
//   document.getElementById("inputText").innerHTML = " ";

//   let num1 = document.getElementById("inputText").value;
//   let num2 = +prompt("Enter Any Number");

//   for (let i = 1; i <= num2; i++) {
//     let result = num1 * i;
//     document.getElementById("Output").innerHTML += result + "<br/>";
//   }
// }

// // let's Concatenate String

// // document.getElementById("write").onclick = function () {
// //   document.write("Welcome To Dark Web");

// //   let num1 = 272;
// //   let num2 = 333;
// //   let num3 = num1 + num2;

// //   // console.log(" num 3  is = " +  num3);
// //   // + is a conctenation operator
// //   let firstName = "Haji Hafiz";
// //   let lastName = "Muhammad  Abdullah";
// //   // let fullName = firstName + lastName;

// //   let statement =
// //     "let num1 = " +
// //     num1 +
// //     "<br /> let num2 = " +
// //     num2 +
// //     "<br>let num3 = " +
// //     num1 +
// //     num2;
// //   console.log("num1  = :>> ", num1);
// //   console.log("num2 = :>> ", num2);
// //   console.log("num1 + num2 = num3= :>> " + num3);

// //   // console.log("bhai ni Ahmed Don " + fullName + "Hacker");
// // };

// // document.getElementById("Output").innerHTML = num1 * num2 + "<br />";
// // for (let index = 0; index < array.length; index++) {} {Loop ka Structure}

// Generate Table Button Again Date 24 /05 / 2024
function generateTable() {
  document.getElementById("Output").innerHTML = "";

  let userTableValue = +prompt("Enter Number To Multiply");
  let numberToMultiply = +prompt("Enter Number To Multiply with");
  
  // let result = userTableValue * numberToMultiply;

  for (i = 1; i <= numberToMultiply; i++) {
    let Output = userTableValue * i
    console.log(i);

    document.getElementById("Output").innerHTML +=userTableValue +"*" + i + "=" + Output + "<br>"
  }
}