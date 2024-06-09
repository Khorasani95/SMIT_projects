// let head1 = document.getElementsByTagName('h1')

// head1[4].style.color = "red";

// let head2 = document.getElementsByTagName('h2');

// head2[0].style.color = "purple";

// let link1 = document.getElementsByClassName('link1');
// // link1[0].style.color = "red";

// for (i = 0; i < link1.length; i++) {
//   // link1[i].style.color.textDecoration.fontSize += "green; none; 5rem";
//   link1[i].style.color = "green";
//   link1[i].style.textDecoration = "none"
//   link1[i].style.fontSize = "5rem"
//   console.log(i)
// }

// let map = document.createElement('a');

// map.href = "https://www.google.com";// link banane kyliye

// map.innerText = " click to open";

// document.body.appendChild(map); //body me show krwne keliye

function valueByUser(id) {
  return document.getElementById(id).value;
}

function changeColor() {

  let value1 = valueByUser("color1")
  let value2 = valueByUser("color2")
  let value3 = valueByUser("color3")

  document.body.style.backgroundColor = 'linear-gradient(to right' + value1 + value2 + value3 + ')';
}





