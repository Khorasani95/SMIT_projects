// Doing lower Case Button Date 25/05/2024
function clearSt() {
  document.getElementById("inputText").value = ""; // Yahan pr value ana hain  keu k user value put krta hai 
  document.getElementById("Output").innerHTML = "";
}
function toLower() {
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Enter Input First");
    return;
  }

  valueByUser = valueByUser.toLowerCase();

  document.getElementById("Output").innerHTML = valueByUser;
}
// Doing Upper Case Button Date 25/05/2024
function toUpper() {
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Enter Input First");
    return;
  }

  valueByUser = valueByUser.toUpperCase();

  document.getElementById("Output").innerHTML = valueByUser;

}
// Doing Capatalize Button Date 25/05/2024 (Capatalixe Function Java Me nahi hai Khud banana prta)
function capatalize() {
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Enter Input First");
    return;
  }

  valueByUser = valueByUser.toLowerCase();

  let copyingFirst = valueByUser.charAt(0).toUpperCase;
  copyingFirst = copyingFirst.toUpperCase();

  let copyingOther = valueByUser.slice(1)
  copyingOther = copyingOther.toLowerCase();

  let done = copyingFirst + copyingOther;

  document.getElementById("Output").innerHTML = done;

}
// Doing Better Formating Button Date 25/05/2024
function betterFormating() {
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Enter Input First");
    return;
  }
  valueByUser = valueByUser.toLowerCase();
  console.log(valueByUser);

  valueByUser = valueByUser;


  document.getElementById("Output").style.testTransform = 'capatalize';
  document.getElementById("Output").innerHTML += valueByUser;
}
// Doing Print Cities Button Date 25/05/2024
let num;
function printCities() {
  document.getElementById("Output").innerHTML = "";

  for (i = 0; i < cities.length; i++) {
    num = i + 1;
    document.getElementById("Output").innerHTML += num + ")" + cities[i] + "<br>";
  }
}
let cities = ["Islamabad", "Lahore", "Faisalabad", "Kaarachi", "Multan", "Sibbi"];
// Doing Adding Cities Button Date 25/05/2024
function addInList() {
  document.getElementById("Output").innerHTML = "";
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Enter Input First");
    return;
  }
  console.log(cities);
  // let cityFound = false;

  for (i = 0; i < cities.length; i++) {

    if (cities[i] === valueByUser) {
      cityFound = true;
      let html = "Your city is already exist there"
      document.getElementById("Output").innerHTML = html;
    }

  }

  if (cityFound === false) {

    cities.push(valueByUser)
    document.getElementById("Output").innerHTML = "Your City has been added in the list ";
  }
}
// Doing Checking Cities Button Date 25/05/2024
function checkInList() {
}
//Doing Find Word button 26/05/2024 
function findWord() {
  let valueByUser = document.getElementById("inputText").value.toLowerCase().trim();

  if (!valueByUser) {
    alert("Enter Something")
    return;
  }
  let fetchingFromInputBlue = document.getElementById("textInBlue").innerHTML.toLowerCase();
  let finding = fetchingFromInputBlue.indexOf(valueByUser);
  
  if (finding !== -1) {
    document.getElementById("Output").innerHTML = "Your Character is present at index number. " + finding;
  } else {
    document.getElementById("Output").innerHTML = ("Your Character is not there. ");
  }
}
// Doing Replace Button 26/05/2024
function repWord() {
  let valueByUser = document.getElementById("inputText").value;

  if (!valueByUser) {
    alert("Input is empty");
    return;
  }

  let toChangeWith = prompt("Enter to change With");

  if (!toChangeWith) {
    alert("Enter Something");
    return;
  }

  let fetchingFromInputBlue = document.getElementById("textInBlue").innerHTML;
  let changingThem = fetchingFromInputBlue.replaceAll(valueByUser,toChangeWith);
  document.getElementById("textInBlue").innerHTML = changingThem;
  
  document.getElementById("Output").innerHTML = changingThem;
}

