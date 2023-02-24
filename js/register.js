
//REGISTER FORM VLIDATION

const email = document.getElementById("useremail");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
let errordisplayregister = document.getElementById("errordisplayregister");
let signupObj = {};
let signupArr = [];


// function to create a user

async function postUser(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log("error generated", error);
  }
}

// name validation
function ValidateNames() {
  let firstname = document.getElementById("fname").value;
  let lastname = document.getElementById("lname").value;


  if (firstname.length == 0 && lastname.length == 0) {
    errordisplayregister.style.color = "red";
    errordisplayregister.innerHTML = "Fill all your names";
    return false;
  }
  
  errordisplayregister.style.color = "green";
  errordisplayregister.innerHTML = "user registered!";
  return true;
}

//email validation

function validateEmail() {
    let userEmail = document.getElementById("useremail").value;
    if (userEmail.length == 0) {
        errordisplayregister.style.color = "red";
        errordisplayregister.innerHTML = "Fill in your email";
      return false;
    }
    if (!userEmail.match(/^[A-Za-z\._#&\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        errordisplayregister.style.color = "red";
        errordisplayregister.innerHTML = "Invalid email address";
        document.getElementById("useremail").value = "";
        document.getElementById("password1").value = "";
        document.getElementById("password2").value = "";
      return false;
    }
    errordisplayregister.style.color = "seagreen";
    errordisplayregister.innerHTML = "Correct";
    return true;
}

//password validation

function ValidatePassword() {
    let passa = document.getElementById("password1").value;
  
    if (passa.length == 0) {
      errordisplayregister.innerHTML = "fill in password";
      errordisplayregister.style.color = "red";
      return false;
    }
  
    if (passa.length < 6) {
      errordisplayregister.innerHTML = "weak password!";
      errordisplayregister.style.color = "red";
      
      return false;
    }
    if (passa.length > 25) {
      errordisplayregister.innerHTML = "Too high";
      errordisplayregister.style.color = "red";
      return false;
    }
    errordisplayregister.innerHTML = "";
  
    return true;
}

document.getElementById("register-send").addEventListener("click", async function (e) {
    e.preventDefault();
    let fname, lname, email, password;
    fname = document.getElementById("fname");
    lname = document.getElementById("lname");
    email = document.getElementById("useremail");
    password = document.getElementById("password1");
    const formData = new FormData();


    let Fname = fname.value;
    let Lname = lname.value;
    let Email = email.value;
    let P1 = password1.value;
    let P2 = password2.value;
    let passa = P1;
    let passb = P2;
  
    if (
      Fname.length == 0 &&
      Lname.length == 0 &&
      Email.length == 0 &&
      P1.length == 0 &&
      P2.length == 0
    ) {
      errordisplayregister.innerHTML = "Fill all the fields first!";
      errordisplayregister.style.color = "red";
      
    } else if (passb.length == 0) {
      errordisplayregister.innerHTML = "Confirm password";
      errordisplayregister.style.color = "red";
      return false;
    }
    else if (!ValidatePassword() || !validateEmail() || !ValidateNames()) {
      return false;
    } else if (passa !== passb) {
      errordisplayregister.innerHTML = "password not match";
      errordisplayregister.style.color = "red";
      return false;
    } else if (passa === passb) {
      signupObj = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        password: password.value,
      };
      // signupArr.push(signupObj);
      // window.localStorage.setItem("Clients", JSON.stringify(signupArr));
      postUser(
        "https://my-brand-backend-serge.onrender.com/api/user-register",
        signupObj
      ).catch((err) => console.log(err.message));

      // signupArr.push(signupObj);
      // window.localStorage.setItem("users", JSON.stringify(signupArr));

      document.getElementById("fname").value = "";
      document.getElementById("lname").value = "";
      document.getElementById("useremail").value = "";
      document.getElementById("password1").value = "";
      document.getElementById("password2").value = "";
      return true;
      }
  }
);

