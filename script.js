const password= document.querySelector("#password")
const confirmPassword= document.querySelector("#confirmPassword")
const passwordError=document.querySelector("#password+span")

password.addEventListener('input', validate)
confirmPassword.addEventListener('input',validate)

function validate(e){
    if(password.value!=confirmPassword.value){
        password.classList.add("error");
        confirmPassword.classList.add("error");
        passwordError.innerHTML="*Password do not match";
    }
    else{
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        passwordError.innerHTML="";
    }
}