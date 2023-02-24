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




const fname = document.getElementById("frstname");
const lname = document.getElementById("lstname");
const email = document.getElementById("useremail");
const message = document.getElementById("usermessage");
const listMessage = document.getElementById("List of message");
let Messageobj = {};
let MessageArr = [];


// function to create a message

async function postMessage(url, data) {
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

document.getElementById("contactSend").addEventListener("click", function (e) {
    e.preventDefault();
    const Fname = fname.value;
    const Lname = lname.value;
    const Email = email.value;
    const Usermessage = message.value;
  
    // Regular expression to check for valid email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
    if (
      Fname.length == 0 ||
      Lname.length == 0 ||
      Email.length == 0 ||
      Usermessage.length == 0
    ) {
      errorcontact.innerHTML = "Fill all the fields first!";
      errorcontact.style.color = "red";
      
    }else if (!emailRegex.test(Email)) {
      errorcontact.innerHTML = "Enter a valid email address!";
      errorcontact.style.color = "red";
    } else {
      Messageobj = {
        firstname: fname.value,
        lastname: lname.value,
        email: email.value,
        message: message.value,
      };
      console.log(Messageobj);

      postMessage(
        "https://my-brand-backend-serge.onrender.com/api/add-messages",
        Messageobj
      ).catch((err) => console.log(err.message));

      // MessageArr.push(Messageobj);
      // window.localStorage.setItem(`Message`, JSON.stringify(MessageArr));
  
      fname.value = "";
      lname.value = "";
      email.value = "";
      message.value = "";
      return true;
    }
  });