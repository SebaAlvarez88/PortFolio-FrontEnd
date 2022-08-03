const login_button = document.getElementById("login");
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


const elementsX = Array.from(document.getElementsByClassName("privilegio"));

function Editable(id) {
  let paragraph = document.getElementById(id);
  paragraph.contentEditable = true;
  paragraph.style.backgroundColor = "#dddbdb";
};

function NoEditable(id) {
  let paragraph = document.getElementById(id);
  paragraph.contentEditable = false;
  paragraph.style.backgroundColor = "white";
};

function LogIn (){
  console.log("entro a la funcion");
  const username = document.getElementById("username");
  const password = document.getElementById("password");
    console.log("username: " + username.value + " password: " + password.value);
    if (username.value === "Admin" && password.value === "FullStacker") {
      alert("You have successfully logged in.");
      Array.from(document.getElementsByClassName("privilegio")).forEach((element) => element.classList.remove("privilegio"));
      document.getElementById('id01').style.display="none";
      document.getElementById('login').style.display="none";
      document.getElementById('logout').style.display="block";
  } else {
      alert("Invalid username or password");
  }
};

function LogOut(){
  Array.from(elementsX).forEach((element) => element.classList.add("privilegio")); 
  document.getElementById('login').style.display="block";
  document.getElementById('logout').style.display="none";
};

function OpenLoginModal() {
  document.getElementById('id01').style.display="block"
};

