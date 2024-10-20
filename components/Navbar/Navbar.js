const hamburger = document.getElementsByClassName("hamburger")[0];
const menu = document.getElementsByClassName("menu")[0];

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");
});

let icon = document.getElementById("icon");
window.onload = function () {
  let theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.classList.add("darkmode");
    icon.src = "/images/light.png";
  } else {
    document.body.classList.remove("darkmode");
    icon.src = "/images/dark.png";
  }
};

icon.onclick = function () {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "/images/image.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "/images/dark.png";
    localStorage.setItem("theme", "light");
  }
};

let ele = document.querySelectorAll("a")

for (let i = 0 ;i < ele.length ; i++){
  ele[i].onclick = function (){
    // console.log(ele[i])

    let isLoggedIn = localStorage.getItem("isLoggedIn")

    if(isLoggedIn === 'false' || !isLoggedIn) {
      ele[i].href = "/pages/login-signup/login-signup.html";
    }else{
      let login = document.getElementById("login");
      login.href = login.baseURI
    }

    // console.log(ele[i])

  };
}




