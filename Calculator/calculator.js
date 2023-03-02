$(document).ready(() => {
    $("#header").text("Hi " + new URL(window.location).searchParams.get("username") + ", Welcome to Calculator Application");

    const numberRegex = /^-?((\d*\.\d+|\d+))$/;
    let isFirstNumberInValid = true;
    let isSecondNumberInValid = true;

    const handleCalculate = (event) => {
        const firstNumber = parseFloat($('#firstNumber').val());
        const secondNumber = parseFloat($('#secondNumber').val());
        const result = $('#result');

        const operation = event.target.id;

        switch (operation) {
            case 'add':
                result.val(firstNumber + secondNumber);
                break;
            case 'sub':
                result.val(firstNumber - secondNumber);
                break;
            case 'mul':
                result.val(firstNumber * secondNumber);
                break;
            case 'div':
                result.val(firstNumber / secondNumber);
                break;
        }
    }

    const addBtn = $('#add').click(handleCalculate);
    const subBtn = $('#sub').click(handleCalculate);
    const mulBtn = $('#mul').click(handleCalculate);
    const divBtn = $('#div').click(handleCalculate);

    const disableControls = () => {
        const isValid = isFirstNumberInValid || isSecondNumberInValid;
        addBtn.prop("disabled", isValid);
        subBtn.prop("disabled", isValid);
        mulBtn.prop("disabled", isValid);
        divBtn.prop("disabled", isValid);
    }

    const validateFirstNumber = (event) => {
        const value = event.target.value.trim();
        const errorFieldName = $('#firstNumberError');

        if (value.length === 0) {
            errorFieldName.text("First number is mandatory");
            isFirstNumberInValid = true;
        } else if (!numberRegex.test(value)) {
            errorFieldName.text("Please enter only number");
            isFirstNumberInValid = true;
        } else {
            errorFieldName.text("");
            isFirstNumberInValid = false;
        }

        disableControls();
    }

    const validateSecondNumber = (event) => {
        const value = event.target.value.trim();
        const errorFieldName = $('#secondNumberError');

        if (value.length === 0) {
            errorFieldName.text("Second number is mandatory");
            isSecondNumberInValid = true;
        } else if (!numberRegex.test(value)) {
            errorFieldName.text("Please enter only number");
            isSecondNumberInValid = true;
        } else {
            errorFieldName.text("");
            isSecondNumberInValid = false;
        }

        disableControls();
    }

    $('#firstNumber').keyup(validateFirstNumber).blur(validateFirstNumber);
    $('#secondNumber').keyup(validateSecondNumber).blur(validateSecondNumber);

});