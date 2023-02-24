

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
let loginObj = {};
let userToken = [];


// login function

async function logUser(url, data) {
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

// async function logUser(url, data) {
//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const jsonData = await response.json();
//     if (jsonData.error) {
//       errordisplay.innerHTML = "Error Password or Username";
//       errordisplay.style.color = "red";

//     } else {
//       errordisplay.innerHTML ="login sucessfully";
//       errordisplay.style.color = "green";
//       window.open("/Dashboard/Dashboard.html");
//     }
//   } catch (error) {
//     console.log("error generated", error);
//     errordisplay.innerHTML ="username or password is invalid";
//     errordisplay.style.color = "red";

//   }
// }

//username validation

function validateEmail() {
  let userEmail = document.getElementById("useremail").value;
  if (userEmail.length == 0) {
    errordisplay.innerHTML = "No email entered!";
    errordisplay.style.color = "red"
    return false;
  }
  if (!userEmail.match(/^[A-Za-z\._#&\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    errordisplay.innerHTML = "Invalid email address";
    errordisplay.style.color = "red"
    return false;
  }
}

//password validation

function validatePassword() {
  let userpassword = document.getElementById("userpassword").value;
  if (userpassword.length == 0) {
    errordisplay.innerHTML = "No password entered!";
    errordisplay.style.color = "red"
    return false;
  }
}




document.getElementById("login-send").addEventListener("click", function (e) {
  e.preventDefault();
  let email = document.getElementById("useremail").value;
  let pass = document.getElementById("userpassword").value;
  loginObj = {
    email: email,
    password: pass,
  };

  logUser(
    "https://my-brand-backend-serge.onrender.com/api/user-login",
    loginObj
  )
    .then((data) => {
      Alloweduser(data);
    })
    .catch((error) => console.log(error));


    function Alloweduser(token) {
      if (token === "email or password does not exist" || token === "") {
        errordisplay.innerHTML = token;
      } else if (email === "" || pass === "") {
        validatePassword();
        validateEmail();
      } else if (token.length <= 80) {
        errordisplay.innerHTML ="username or password is invalid";
        errordisplay.style.color = "red";
      } else {
        const myToken = {
          token: token,
          isLoggedin: true,
        };
        console.log(myToken);
        userToken.push(token);
        window.localStorage.setItem("myToken", JSON.stringify(myToken));
        document.getElementById("useremail").value = "";
        document.getElementById("userpassword").value = "";
        window.location.href = "/Dashboard/Dashboard.html";
      }
    }
  
});


