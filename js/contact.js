const fname = document.getElementById("frstname");
const lname = document.getElementById("lstname");
const email = document.getElementById("useremail");
const message = document.getElementById("usermessage");
const listMessage = document.getElementById("List of message");
let Messageobj = {};
let MessageArr = [];


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
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        message: message.value,
      };
      MessageArr.push(Messageobj);
      window.localStorage.setItem(`Message`, JSON.stringify(MessageArr));
  
      fname.value = "";
      lname.value = "";
      email.value = "";
      message.value = "";
    }
  });