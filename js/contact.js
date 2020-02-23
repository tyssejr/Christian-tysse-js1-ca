const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function validateForm(){
    event.preventDefault();
    console.log("the form was submitted")
    
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");
    const firstNameValue = firstName.value;

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const invalidEmailError = document.querySelector("#invalidEmailError");
    const emailValue = email.value;

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if(checkValue(firstNameValue)=== true){
        firstNameError.style.display ="none";
    }else{
        firstNameError.style.display = "block";
    }

    if (checkValue(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display = "block";
    }

    if(checkMessageValue(messageValue)){
        messageError.style.display = "none";
    }else {
        messageError.style.display = "block";
    }

    if(checkValue(emailValue)){
        emailError.style.display = "none";
        if (invalidateEmail(emailValue) === true) {
            invalidEmailError.style.display = "none";
        } else {
            invalidEmailError.style.display = "block";
        }
    }else{
        emailError.style.display = "block";
        invalidEmailError.style.display = "none";
    }  
}
function invalidateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

function checkValue(value){
    const trimmed = value.trim();

    if (trimmed.length > 0) {
        return true;
    } else {
        return false;
    }
}
    function checkMessageValue(value) {
        const trimmedMessage = value.trim();

        if (trimmedMessage.length > 10) {
            return true;
        } else {
            return false;
        }
    }
