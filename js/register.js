
//REGISTER FORM VLIDATION

const email = document.getElementById("useremail");
const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
let errordisplayregister = document.getElementById("errordisplayregister");
let signupObj = {};
let signupArr = [];



async function postData(url, data) {
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
    let fname, lname, email, password;
    fname = document.getElementById("fname").value;
    lname = document.getElementById("fname").value;
    email = document.getElementById("useremail").value;
    password = document.getElementById("password1").value;
    const formData = new FormData();



    let userEmail = email.value;
    let P1 = password1.value;
    let P2 = password2.value;
    let passa = P1;
    let passb = P2;
  
    if (
      userEmail.length == 0 &&
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
    else if (!ValidatePassword() || !validateEmail()) {
      return false;
    } else if (passa !== passb) {
      errordisplayregister.innerHTML = "password not match";
      errordisplayregister.style.color = "red";
      return false;
    } else if (passa === passb) {
      // Check if the email is already registered
      let existingUser = signupArr.find(user => user.userEmail === userEmail);
      if (existingUser) {
        errordisplayregister.innerHTML = "Email already registered";
        errordisplayregister.style.color = "red";
        return false;
      } else {
        signupObj = {
          firstname: `${fname}`,
          lastname: `${lname}`,
          email: `${email}`,
          password: `${password}`,
        };
      // signupArr.push(signupObj);
      // window.localStorage.setItem("Clients", JSON.stringify(signupArr));
      postData(
        "https://my-brand-backend-serge.onrender.com/api/user-register",
        signupObj
      )
        .then((data) => registerResult(data))
        .catch((err) => console.log(err.message));

    
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


  });


// document.getElementById("register-send").addEventListener("click", function (e) {
//   let userEmail = email.value;
//   let P1 = password1.value;
//   let P2 = password2.value;
//   let passa = P1;
//   let passb = P2;

//   if (
//     userEmail.length == 0 &&
//     P1.length == 0 &&
//     P2.length == 0
//   ) {
//     errordisplayregister.innerHTML = "Fill all the fields first!";
//     errordisplayregister.style.color = "red";
    
//   } else if (passb.length == 0) {
//     errordisplayregister.innerHTML = "Confirm password";
//     errordisplayregister.style.color = "red";
//     return false;
//   }
//   else if (!ValidatePassword() || !validateEmail()) {
//     return false;
//   } else if (passa !== passb) {
//     errordisplayregister.innerHTML = "password not match";
//     errordisplayregister.style.color = "red";
//     return false;
//   } else if (passa === passb) {
//     signupObj = {
//       userEmail: email.value,
//       P1: password1.value,
//       P2: password2.value,
//     };
//     signupArr.push(signupObj);
//     window.localStorage.setItem("users", JSON.stringify(signupArr));
//     document.getElementById("useremail").value = "";
//     document.getElementById("password1").value = "";
//     document.getElementById("password2").value = "";
//     window.location.href = "login.html";
//     return true;
//   }
// });




