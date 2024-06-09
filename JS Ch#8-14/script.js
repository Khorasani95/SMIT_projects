// document.getElementById("ConcatenateSomeStrings").onclick = function () {
//   let num1 = prompt("Enter First Number");
//   let num2 = +prompt("Enter Second Number");
//   let result = `num1 =  ${num1} + <br> num2 = ${num2}`;
//   let result2 = `Concatenation =${num1} + <br> num2 = ${num2}`;
//   document.getElementById("Output").innerHTML = result2;
//   document.getElementById("Statement").innerHTML = result;
// };

// CHAPTER 8-15

// Doing concatenateSomeStrings button again 5/23/2024
function clearStatement() {
  document.getElementById("Statement").innerHTML = "";
  document.getElementById("Output").innerHTML = "";
}
function concatenateSomeStrings() {
  let greet1 = "Good";
  let greet2 = "Day";
  let fullGreet = greet1 + " " + greet2 + " " + "!";
  alert(fullGreet);

  document.getElementById("Statement").innerHTML = `let greet1 = "Good"; <br> let greet2 = "Day"; <br> let fullGreet = greet1 + " " + greet2 + " " +"!"; <br> alert(fullGreet);`;
  document.getElementById("Output").innerHTML = fullGreet;

}
// Doing askName button again 5/23/2024
function askName() {
  let firstName = prompt("Enter First Name");

  if (!firstName) {
    return alert("Complete The Requirments First!!");
  }
  let secondName = prompt("Enter Second Name");

  if (!secondName) {
    return alert("Complete The Requirments First!!");
  }

  let fullName = firstName + " " + secondName;

  document.getElementById("Statement").innerHTML = `let firstName = ` + firstName + ` ;<br> let secondName = prompt("");<br>let fullName = firstName + " " + secondName;`
  document.getElementById("Output").innerHTML = fullName;

}
// Doing concatenateSomeStrings button again 5/23/2024
// <less than sign 
// >greater than sign
function comparisonOp() {
  let num1 = +prompt("Enter First Number to Compare");
  let num2 = +prompt("Enter Second Number to Compare");
  // alert(num1);

  if (num1 == num2) {
    return document.getElementById("Output").innerHTML = "Values are Equal";
  } else if (num1 < num2) {
    return document.getElementById("Output").innerHTML = num1 + " is Less than" + num2;
  } else if (num1 > num2) {
    return document.getElementById("Output").innerHTML = num1 + " is greater than " + num2;
  }
}
// Doing ifElse button again 5/23/2024
function ifElz() {
  let num1 = +prompt("Enter First Number to Compare");
  let num2 = +prompt("Enter Second Number to Compare");
  // alert(num1);

  if (num1 == num2) {
    return document.getElementById("Output").innerHTML = "Values are Equal";
  } else if (num1 < num2) {
    return document.getElementById("Output").innerHTML = num1 + " is Less than " + num2;
  } else if (num1 > num2) {
    return document.getElementById("Output").innerHTML = num1 + " is greater than " + num2;
  }
}
// document.getElementById("AskNamefromUser").onclick = function () {
//   let firstName = prompt("Enter First Name");
//   let lastName = prompt("Enter Last Name");
//   let fullName = firstName + lastName;
//   let statement = `firstName =   ${firstName}   <br> lastName = ${lastName} `;

//   document.getElementById("Output").innerHTML = `fullName =  ${fullName}`;
//   document.getElementById("Statement").innerHTML = statement;
// };

// document.getElementById("ifelseif").onclick = function () {
//   let grade;

//   let marks = prompt("Enter Any Number Under 100");

//   if (marks >= 90) {
//     alert("grade = A+");
//   } else if (marks >= 80) {
//     alert("grade = B+");
//   } else if (marks >= 70) {
//     alert("grade = C+");
//   } else if (marks == 60) {
//     alert("grade = d+");
//   } else {
//     alert("grade = fail");
//   }
// };

//Doing Button Testing Sets Of Conditions 5/23/2024
// <less than sign 
// >greater than sign
function testingSet() {

  let Age = +prompt("Enter age");
  let weight = +prompt("Enter Weight");

  if (Age <= 18 && weight >= 50) {
    alert("You Are smart");
  } else if (Age > 18 && weight > 50) {
    alert("Excess of Weght");
  } else {
    alert("U Are a Baby");
  }
}
// Doing Nested If Again 5/23/2024
function nestIf() {

  let Age = +prompt("Your Age");
  let weight = +prompt("Your Weight");

  if (Age >= 18) {
    alert("your age is greater");

    if (weight > 50) {
      alert("U are Fat");
    } else {
      alert("Your Weight is less Than 50");
    }

  } else {
    alert("U Are a Baby");
  }
}
//Doing Login Button Again 5/23/2024
function logIn() {
  const nam = prompt("Enter your Name");
  const passwrd = prompt("Enter your Password");
  
  if (nam === "Hafiz Muhammad Abdullah" && passwrd == 123) {
    alert("U are Logged in");
  } else {
    alert("Incorrect Information");
  }
 
}
// document.getElementById("login").onclick = function () {
//   alert("Login");
//   let name = prompt("Enter first Name");
//   let Password = prompt("Enter Your Password");
//   let outputState = `alert("Login");
//                      let name = prompt("Enter first Name");
//                      let Password = prompt("Enter Your Password");`;

//   document.getElementById("Output").innerHTML = name + " " + Password;
//   document.getElementById("Statement").innerHTML = outputState;
// };

// // Testing Set of Conditions
// document.getElementById("Testingsetsofconditions").onclick = function () {
//   let age = prompt("Enter Your  Age");
//   console.log(age);
//   let weight = prompt("Enter Your Weight");

//   if (age > 20 && weight < 50) {
//     alert("You are a smart guy");
//   } else if (age > 70 && weight < 88) {
//     alert("You are a chus");
//   } else if (age < 10) {
//     alert("baby");
//   }
// };

// //        if  () {}
// // else  if  () {}
