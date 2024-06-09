let weekDays = ["Sun", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let monthDays = ["Janury", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

let now = new Date();
let days = now.getDay();
days = weekDays[days];

let month = now.getMonth();
let monthToGet = monthDays[month];

let date = now.getDate();

let year = now.getFullYear();

let hour = now.getHours();

let min = now.getMinutes();

let sec = now.getSeconds();

if (hour >= 12) {
  sec = sec + " pm";
} else {
  sec = sec + " am";
}

if (date === 1 || date === 21 || date === 31) {
  date = date + "st";
} else if (date === 2 || date === 22) {
  date = date + "nd";
} else if(date === 3 || date === 23) {
  date = date + "rd"; 
} else {
  date = date + "th";
}


if (hour > 12) {
  hour = hour - 12
} else {
  hour = hour;
}

document.getElementById('div').innerHTML = days + ", " + monthToGet + " " + date + " " + year + "    |    " + hour + ":" + min + ":" + sec;

