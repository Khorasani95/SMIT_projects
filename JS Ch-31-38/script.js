// let rightNowDate = new Date();
// console.log(rightNowDate.getDay());
// console.log(rightNowDate.getDate());
// console.log(rightNowDate.getFullYear());
// console.log(rightNowDate.getTime());
// console.log(typeof rightNowDate);
// console.log(rightNowDate);

// document.getElementById("output").innerHTML = "<h6></h6>" + rightNowDate;

// let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// dayNames[rightNowDate.getDay()];
// console.log(dayNames[rightNowDate.getDay()]);
// console.log(dayNames[rightNowDate.getDay()]);

function clearStatement() {
  document.getElementById("Statement").innerHTML = "";
  document.getElementById("Output").innerHTML = "";
}


let dayNames = ["Sunday ", "Monday ", "Tuesday ", "Wednesday ", "Thursday ", "Friday ", "Saturday "];


function getNameToday() {
  let timeNow = new Date();
  let todayDate = timeNow.getDay();
  todayDate = dayNames[todayDate];
  console.log(todayDate);
}

function daysPassedSinceIBorn() {
  let dob = document.getElementById("input").value;
  console.log(dob);

  if (!dob) {
    alert("");
  }

  let today = new Date();
  let bornDate = new Date(dob);
 

  let todayTime = today.getTime();
  let bornDatTime = bornDate.getTime();

  let msDiff = todayTime - bornDatTime;

  let daysDiff = msDiff / (1000 * 60 * 60 * 24); 
  daysDiff = Math.floor(daysDiff);

  document.getElementById("Output").innerHTML = daysDiff + " days have been passed since u born"
}

function whenIsYourNextBirthday() {
  let dob = document.getElementById("input").value;
  console.log(dob);

  if (!dob) {
    alert("");
  }

  let today = new Date();
  let nextBirthDate = new Date(dob);

  let msDiff = nextBirthDate.getTime() - today.getTime();
  let daysDiff = msDiff / (1000 * 60 * 60 * 24);
  console.log(daysDiff);

  document.getElementById("Output").innerHTML = Math.floor(daysDiff);
}

function greetUserButton(userName) {
  document.getElementById("Output").innerHTML = "Good Afternoon " + userName
}
function greetuser() {
  let userName = prompt("Enter Your Name");
  console.log("value is: " + userName);
  greetUserButton(userName);
  showOutput(userName);
}

function tellTime1() {
  
}

function tellTime1() {

}

function tellTime1() {

}
// Yh Imp Cheez smji hai (is ko khte hain named parameters.)
function calculateAreaRectangle({ num, power}) {
  console.log("Area " + Math.pow( num, power ));


}