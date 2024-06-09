function inputValue(id) {
  return document.getElementById(id).value;
}
function addingUser() {

  event.preventDefault()
  // let users = JSON.parse(localStorage.getItem("users"));
  let users = JSON.parse(localStorage.getItem("users"));
  if (!Array.isArray(users)) {
    users = [];
  }
  let email = inputValue("textByUser");
  let password = inputValue("passwordByUser");

  if (!email) {
    return alert("Enter Email First");
  }

  if (!password) {
    return alert("Enter Password Also");
  }

  let user = {
    email,
    password
  }

  const findingUser = users.find(user => user.email === email)

  if (findingUser) {
    alert("user exists")
    return
  }
  else {
    users.push(user)
  }

  localStorage.setItem("users", JSON.stringify(users))
}

function findInLogin() {
  let users = JSON.parse(localStorage.getItem("users"));
  let email = inputValue("loginemail");
  let password = inputValue("loginPassword");

  if (!email) {
    return alert("Enter Email First");
  }

  if (!password) {
    return alert("Enter Password Also");
  }

  // let findingUser = users.find(user => user.email === email);
  // let checkPassword = users.find(user => user.password === password);
  // if (findingUser) {
  //   if (checkPassword) {
  //     alert("successfully loggedin")

  //   }
  //   else {
  //     alert("incorrect Password")
  //   }
  // } else {
  //   alert("Incorrect Email");
  // }
  // console.log(findingUser);


  let userEmailFindInLogin = users.find(user => user.email === email);
  
  if (userEmailFindInLogin) {
    let userPassFindInLogin = users.find(user => user.password === password);
    if (userPassFindInLogin) {
      alert("Successfully Loggedin");
      return;
    } else {
      alert("Incorrect Password");
    }
  } else {
    alert('Email Not Found')
  };
};
// console.log(userEmailFindInLogin);

// let checkEmail = users.find(user => user.email === email);
// if (checkEmail) {
//   alert("User Already Exist")
// } else {
//   users.push(user);
// }
// let checkPassword = inputValue("loginPassword");

// if (email === users.length) {

// }

const idByUser = () => Math.random().toString(36).slice(2);
// agr arrow function currly braces k sath aik line me likhna to return bhi istamal krna pre ga agr multiple lines me to nahi. Aur agr return istamaal
//  nahi krna to curly braces khtm kro code bhi chota.
const createAt = () => { new Date() };
const userId = () => Math.random().toString(36).slice(2);

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function storingTodo() {
  let title = inputValue("titleByUser");
  let description = inputValue("descriptionByUser");
  let date = inputValue("DobByUser");

  if (!title || !description || !date) {
    return alert("Complete Requirments First")
  }

  const todo = {
    title,
    description,
    date,
    id: idByUser(),
    status: "Active",
    createAt: createAt(),
    userId: userId()
  }
  todos.push(todo)
  localStorage.setItem('todos', JSON.stringify(todos));
}
// Read button
const read = () => console.log(todos);

//Update Button
//Update Button
// const update = () => {
//   // let changing = prompt("Enter What to change with");
//   // let changewith = prompt("enter what to change");
//   // let userUpdate = "Earum cum sit aut d"

//   // let updatedUser = "Hellooooo"

//   let updateUser = prompt("Enter title whose status you want to update:")

//   let myg = prompt("Enter the status you wanted to appear:")

//   let mappedUser = todos.map((todo, i) => {
//     if (todo.title === updateUser) {
//       return { ...todo, status: myg }
//     } else {
//       return todo
//     }
//   })

//   todos = mappedUser

//   const filtereduser = todos.filter(todo => {return todo.id !== "myg" || })


// }
//Update Button
// const update = () => {
//   let whatToChange =prompt("Enter title whose description you want change")
//   let changeWith = prompt('Enter What you Want to appear');

//   let updatingUser = todos.map((todo, i) => {
//     if (todo.title == whatToChange) {
//       return { ...todo, id: changeWith };
//     } else {
//       return todo;
//     }
//   });
//   todos = updatingUser;
// }

const update = () => {
  let whomToChange = prompt("Enter Title Whose id you want to Change");
  let whatToChange = prompt("Enter What To Change");



  let workDone = todos.map((todo, i) => {
    if (todo.title === whomToChange) {
      return { ...todo, id: whatToChange };
    } else {
      return todo;
    }
  });
  todos = workDone;
};
// Delete Button
const handleDelete = () => {
  let whatToDel = prompt("Enter Which Participant u want to delete");
  let filteredTodo = todos.filter(todo => (todo.description !== whatToDel));
  console.log("UserDel", filteredTodo);
  todos = filteredTodo;
  alert("A USer Has benn successfully Deleted");
}
// function mapButton() {
//   let mapTodo = todos.map((todo, i) => {
//     return todos.title1 === "Abd";
//   });
//   console.log(mapTodo);
// }

