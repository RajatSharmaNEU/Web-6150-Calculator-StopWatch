$(document).ready(() => {
    const userNameRegex = /^[A-Za-z0-9 '.-]+$/;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@northeastern.edu$/;
    const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{3,10}$/;;

    let isUserNameValid = false;
    let isEmailValid = false;
    let isPasswordValid = false;

    const enableSubmit = () => {
        $('#submit').prop("disabled", !(isUserNameValid && isEmailValid && isPasswordValid));
    }
    const setUserNameValid = (disable) => {
        isUserNameValid = disable;
        enableSubmit();
    }

    const setEmailValid = (disable) => {
        isEmailValid = disable;
        enableSubmit();
    }

    const setPasswordValid = (disable) => {
        isPasswordValid = disable;
        enableSubmit();
    }

    const validateUserName = (event) => {
        const value = event.target.value.trim();
        const userNameError = $("#usernameError");

        if (value.length == "") {
            userNameError.text("Username is missing");
            setUserNameValid(false);
        } else if (!userNameRegex.test(value)) {
            userNameError.text("Only . & - special characters is allowed");
            setUserNameValid(false);
        } else if (value.length < 3 || value.length > 10) {
            userNameError.text("Username must be between 3 and 10");
            setUserNameValid(false);
        } else {
            userNameError.text("");
            setUserNameValid(true);
        }
    }

    const validateEmail = (event) => {
        let value = event.target.value.trim();
        const emailError = $("#emailError");
        if (value.length == "") {
            emailError.text("Email Id is missing");
            setEmailValid(false);
        } else if (!emailRegex.test(value)) {
            emailError.text("Only Northeastern id allowed");
            setEmailValid(false);
        } else {
            emailError.text("");
            setEmailValid(true);
        }
    }

    const validatePassword = (event) => {
        let value = event.target.value.trim();
        const passwordError = $("#passwordError");
        if (value.length == "") {
            passwordError.text("Please fill in your password");
            setPasswordValid(false);
        } else if (value.length < 3 || value.length > 10) {
            passwordError.text("Password must be of 3 to 10 characters");
            setPasswordValid(false);
        }else if(!passwordRegex.test(value)){
            passwordError.text("Password must have at least one special characters and one number");
            setPasswordValid(false);
        }
        else {
            passwordError.text("");
            setPasswordValid(true);
        }
    }
    

    $('#username').keyup(validateUserName).blur(validateUserName);
    $('#email').keyup(validateEmail).blur(validateEmail);
    $('#password').keyup(validatePassword).blur(validatePassword);



})