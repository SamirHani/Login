// declearing the variables
let inputs = document.querySelectorAll('input');
let sub = document.querySelector('.signup');
let myForm = document.getElementById('myForm');
let form = document.querySelector('.form-container');
let hello = document.querySelector('.hello');
let create = document.querySelector('.create');
let loginHeader = document.querySelector('.loginword h1');
let loginButton = document.querySelector('.login');

// foucus the first input in the begingin of the sign in
inputs[0].focus();

let Users;
if (localStorage.getItem(1) == null) {
  Users = [{ User: 'samir', Pass: 'admin' }];
  localStorage.setItem(1, JSON.stringify(Users));
} else {
  Users = JSON.parse(localStorage.getItem(1));
}

// add user function
function addUsers() {
  let User = inputs[0].value.length > 4 ? inputs[0].value : '';
  let Pass = inputs[1].value.length >= 6 ? inputs[1].value : '';
  if (User == '' || Pass == '') {
    console.log("there's some thing wrong");
  } else {
    Users[Users.length] = { User, Pass };
    localStorage.setItem(1, JSON.stringify(Users));
    inputs[0].value = '';
    inputs[1].value = '';
  }
}

// login funciton
function checkLogin() {
  for (let i = 0; i < Users.length; i++) {
    if (
      inputs[0].value === Users[i].User &&
      inputs[1].value === Users[i].Pass
    ) {
      location.href = 'index2.html';
    } else {
      console.log('wrong username or Password');
    }
  }
}

loginButton.onclick = function () {
  checkLogin();
};
let ch = ['You have an account ?', 'Create an account'];
// create an account new
let ii = true;

function CreateAnAccount(change) {
  if (ii) {
    ii = false;
    loginHeader.textContent = 'SignUp';
    loginButton.textContent = 'SignUp';
    create.textContent = change;
    loginButton.onclick = function () {
      addUsers();
      backToLogin();
    };
  } else {
    ii = true;
    loginHeader.textContent = 'Login';
    loginButton.textContent = 'Login';
    create.style.color = 'rgb(76, 125, 230)';
    create.textContent = ch[1];
  }
}

function backToLogin() {
  loginHeader.textContent = 'Login';
  loginButton.textContent = 'Login';
  create.style.color = 'rgb(76, 125, 230)';
  create.textContent = ch[1];
  loginButton.onclick = function () {
    checkLogin();
  };
}

create.onclick = function () {
  CreateAnAccount(ch[0]);
};
