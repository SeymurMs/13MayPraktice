let user={
    username:"seymur",
    password : "seymur123",
    isLogin : false,
}


checkLoc(user);

let form = document.querySelector('form')
var page = document.querySelector('.page')

if (JSON.parse(localStorage.getItem("dbKey")).isLogin || JSON.parse(sessionStorage.getItem("dbKey"))) {
    form.style.display = "none";
    page.style.display = "block";
}


let logOut = document.querySelector(".btn-style");
let rMe = document.getElementById("exampleCheck1")


form.addEventListener("submit",function(e){
    e.preventDefault();
    alert();
    let input = document.querySelector('.form-control');
    let pass = document.querySelector('.passClass');
    let user1 = JSON.parse(localStorage.getItem("dbKey"));
    if (user1.username == input.value && user1.password == pass.value && rMe.checked) {
        user.isLogin = true;
        localStorage.setItem("dbKey", JSON.stringify(user));
        page.style.display = "block";
        form.style.display = "none";
    }else if(user1.username == input.value && user1.password == pass.value && !rMe.checked){
        user.isLogin = true;
        sessionStorage.setItem("dbKey", JSON.stringify(user));
        page.style.display = "block";
        form.style.display = "none";
    }else{
        return;
    }
    
    
    
})
logOut.addEventListener("click",function () {
    user.isLogin = false;
    localStorage.setItem("dbKey", JSON.stringify(user));
    page.style.display="none";
    form.style.display = "block";
})



function checkLoc(elem) {
    if(!localStorage.getItem("dbKey")){
        localStorage.setItem("dbKey",JSON.stringify(elem))
    }
}

