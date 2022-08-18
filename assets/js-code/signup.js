
// hideShow password Function
const firstPassword = document.getElementById("password");
const secondPassword = document.getElementById("confirm_password");
const firsTtoggle = document.getElementById("firsTtoggle");
const secondToggle = document.getElementById("secondToggle");

function showHideFirst(){
 if(firstPassword.type === "password"){
    firstPassword.setAttribute("type", "text");
    firsTtoggle.classList.add("firstHide");
 }
 else {
    firstPassword.setAttribute("type", "password");
    firsTtoggle.classList.remove("firstHide")
 }
}

function showHideSecond(){
    if(secondPassword.type === "password"){
       secondPassword.setAttribute("type", "text");
        secondToggle.classList.add("secondHide");
    }
    else {
       secondPassword.setAttribute("type", "password");
        secondToggle.classList.remove("secondHide")
    }
   }


//    form vaidation js code
$().ready(function() {
    // validate signup form on keyup and submit
    $("#signupForm").validate({
        rules: {
            
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                minlength: 8,
            },
            confirm_password: {
                required: true,
                minlength: 8,
                equalTo: "#password"
            }
        },
        messages: {
            password: {
                required: "Password is required",
                minlength: "Your password must be at least 8 characters long"
            },
            confirm_password: {
                required: "Passwords must match",
                minlength: "Your password must be at least 8 characters long",
                equalTo: "Passwords must match"
            },
            email: "Email is required"
        }
    });

});