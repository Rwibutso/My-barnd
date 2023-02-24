// Display new form blog

document.getElementById("blog-add-btn").addEventListener("click", function(){
   document.querySelector(".blog-form").style.opacity = "1";
})
 
document.querySelector(".blog-div3 .span2").addEventListener("click", function(){
   document.querySelector(".blog-form").style.opacity = "0";
})
 




const Btitle = document.getElementById("blogTittle");
const Bdesc = document.getElementById("blogDesc");
const Bupload = document.getElementById("Bupload");
const username = document.getElementById("user-name");
let blogObj;

// creating a blog

const myToken = JSON.parse(localStorage.getItem("myToken"));
if (!myToken) {
  window.location.href = "../login.html";
} else {
  const authtoken = myToken.token.data;
  const isLoggedIn = myToken.isLoggedin;
  const accountOwnername = myToken.token.name;
  const accountOwnerEmail = myToken.token.user;

  if (!isLoggedIn && !authtoken) {
    window.location.href = "../login.html";
  } else {
    username.innerHTML = `<h5>${accountOwnername}</h5>`;
    const createBlog = async (url, data) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            Accept:
              "application/json, application/xml, text/plain, text/html, *.*",
            Authorization: `Bearer ${authtoken}`,
            authtoken: `${authtoken}`,
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: data,
        });
        return response.json();
      } catch (error) {
        console.log("error generated", error);
      }

    }
   }}    


   saveBlog.addEventListener("click", function (e) {
      e.preventDefault();
      const blogntitle = Btitle.value;
      const blogDesc = Bdesc.value;

      if (blogntitle.length <= 0) {
        alert("Fill all fields!");
        Btitle.classList.add("error");
        Btitle.addEventListener("keyup", function () {
          Btitle.classList.remove("error");
          return false;
        });
        return true;
      } else if (blogDesc.length <= 0) {
        Bdescription.placeholder = "Fill this field  !!!";
        Bdescription.classList.add("error");
        Bdescription.addEventListener("keyup", function () {
          Bdescription.classList.remove("error");
          return false;
        });
        return true;
      } else {
        const formData = new FormData();
        formData.append("title", Btitle.value);
        formData.append("description", blogDesc);
        for (var pair of formData.entries()) {
          console.log(pair[0] + ", " + pair[1]);
        }
        const url =
          "https://my-brand-backend-serge.onrender.com/api/add-blog";

        createBlog(url, formData)
          .then((data) => registerResult(data))
          .catch((err) => console.log(err.message));

        Btitle.value = "";
        Bdesc.value = "";
      }
    });