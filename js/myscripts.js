

let checkstatus = 1
document.getElementById("togglestatus").addEventListener("click", function(e){
  e.preventDefault();
  if(checkstatus == 0){
    document.getElementById("navBar").style.right = "-100%";
    checkstatus = 1;
  }else{
    document.getElementById("navBar").style.right = "30px";
    checkstatus = 0;
  }
});


//LOGIN FORM VLIDATION

const errordisplay = document.getElementById("errordisplay");

//username validation

function validateEmail() {
  let userEmail = document.getElementById("useremail").value;
  if (userEmail.length == 0) {
    errordisplay.innerHTML = "Invalid login, please try again";
    errordisplay.style.color = "red"
    return false;
  }
  if (!userEmail.match(/^[A-Za-z\._#&\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errordisplay.innerHTML = "Invalid email address";
    errordisplay.style.color = "red"
    return false;
  }
  errordisplay.style.color = "seagreen";
  errordisplay.innerHTML = "Correct!";
  return true;
}

//password validation

function validatePassword() {
  let userpassword = document.getElementById("userpassword").value;
  if (userpassword.length == 0) {
    errordisplay.innerHTML = "Invalid login, please try again!";
    errordisplay.style.color = "red"
    return false;
  }
  userpassword.innerHTML = "";
  return true;
}
document.getElementById("login-send").addEventListener("click", function (e) {
  e.preventDefault();
  let userEmail = document.getElementById("useremail").value;
  let userpassword = document.getElementById("userpassword").value;
  if (userEmail === "" && userpassword === "") {
    validateEmail();
    validatePassword();
  } else if (userEmail == "admin@gmail.com" && userpassword == "serge2023") {
    window.location.href = "/Dashboard/Dashboard.html";
  } else if (userEmail != "admin@gmail.com" || userpassword == "serge2023") {
    errordisplay.innerHTML = "Incorrect email, Please Try again!";
    errordisplay.style.color = "red"
  } else if (userEmail == "admin@gmail.com" || userpassword != "serge2023") {
    errordisplay.innerHTML = "Incorrect password, Please Try again!";
    errordisplay.style.color = "red";
  } else if (userEmail != "admin@gmail.com" || userpassword != "serge2023") {
    errordisplay.innerHTML = "Invalid login, please try again";
    errordisplay.style.color = "red"

  }
  document.getElementById("useremail").value = "";
  document.getElementById("userpassword").value = "";
});


