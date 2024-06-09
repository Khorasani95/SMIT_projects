
let users =JSON.parse(localStorage.getItem("users")) || [];
// let user ;
 let user = {
  email: emailByUser,
  password: passByUser,
  uniqueId: Math.random().toString(36).slice(2),
  status: "Active",
  createAt: new Date().getTime()
} 

function storingUserValue() {
  let emailByUser = document.getElementById("emailByUserInHtml").value;
  let passByUser = document.getElementById("passByUserInHtml").value;
  let emailFound = false;
  let passFound = false;

  if (!emailByUser   ) {
     return alert("Enter Your Email in the Input");
  }
  if (!passByUser) {
    return alert("Enter Your Password in the Input");
  }

  let user = {
    email: emailByUser,
    password: passByUser,
    uniqueId: Math.random().toString(36).slice(2),
    status:"Active", 
    createAt: new Date().getTime()
  }
  console.log(users);
  
  users.push(user);
  // alert("A user has been added");

  for (i = 0; i < users.length; i++) {
    if (users[i] === emailByUser) {
      emailFound = true;
      return alert("You are already registered");
    }
  }
  
  if (!emailFound) {
    users.push(emailByUser);
    alert('Your Email Has been registered');
    // console.log('Email :>> ', Email);
  }

  for (i = 0; i < users.length; i++) {
    if (users[i] === passByUser) {
      passFound = true;
      return alert("You are already registered");
    }
  }

  if (!passFound) {
    users.push(passByUser);
    alert('Your password Has been registered');
    // console.log('Email :>> ', Email);
  }


}




//let users = [];

// function storingI'nArray() {
//   let firstName = document.getElementById("inputByUser").value;
//   let lastName = document.getElementById("inputByUserLastName").value;
//   let email = document.getElementById("inputByUserEmail").value;




//   let user = {
//     firstName,
//     lastName,
//     email,
//     dob,
//     id: Math.random().toString(36).slice(2) + new Date().getTime()
//   }
//   users.push(user);
//   console.log(users);
// }