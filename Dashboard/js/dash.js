// Display the dashboard new form

document.getElementById("profile-show-btn").addEventListener("click", function(){
    document.querySelector(".prfl-form").style.opacity = "1";
})

document.querySelector(".div7 .span2").addEventListener("click", function(){
    document.querySelector(".prfl-form").style.opacity = "0";
})

// Form validation
const userprofile = document.getElementById("prflAdd");
const username = document.getElementById("username");
const userstatus = document.getElementById("userstatus");
const phone = document.getElementById("userphone");
const email = document.getElementById("useremail");
const cv = document.getElementById("usercv");
const address = document.getElementById("useraddress");
let dasharr = [];
let dashObj = {}; 

document.getElementById("dashSave").addEventListener("click", function(e){
    e.preventDefault();
    
    const Name = username.value;
    const Status = userstatus.value
    const Phone = phone.value
    const Email = email.value
    const Cv = cv.value
    const Address = address.value
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const regex = /^\d{10}$/;

    userprofile.addEventListener("change", function(){
        const file = userprofile.files[0];
        const reader = new FileReader();
        reader.addEventListener("load",function(){
            const fileData = reader.result;
        })

    })
   


    if (
        Name.length == 0 &&
        Status.length == 0 &&
        Phone.length == 0 &&
        Email.length == 0 &&
        Cv.length == 0 &&
        Address.length == 0
      ) {
        dasherror.innerHTML = "Fill all the fields first!";
        dasherror.style.color = "red"; 
    }
    else if (!emailRegex.test(Email) || (!regex.test(Phone))) {
        errorcontact.innerHTML = "Enter a valid email address!";
        errorcontact.style.color = "red";
    } else {
        dashObj = {
          userprofile: fileData.value,
          username: username.value,
          userstatus: userstatus.value,
          phone: userphone.value,
          email: useremail.value,
          cv: usercv.value,
          address: useraddress.value,
        };
        MessageArr.push(Messageobj);
        window.localStorage.setItem(`Message`, JSON.stringify(MessageArr));
    
        fname.value = "";
        lname.value = "";
        email.value = "";
        message.value = "";
      }

})