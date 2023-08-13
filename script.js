// function operate(a, operator, b) {
//     switch (operator) {
//         case '+':
//             return a + b;
//         case '-':
//             return a - b;
//         case '*':
//             return a * b;
//         case '/':
//             return a / b;
//     }
// }

function calculate() {
    var expression = document.querySelector("input");
    var expressionValue = expression.value;
    // var symbols = ["+", "-", "*", "/"];

    // for (var i = 0; i < symbols.length; i++) {
    //     if (expressionValue.includes(symbols[i])) {
    //         var a = Number(expressionValue.substring(0, expressionValue.indexOf(symbols[i])));
    //         var b = Number(expressionValue.substring(expressionValue.indexOf(symbols[i]) + 1), expressionValue.length);
    //     }
    // }

    // var result = 0;

    // if (expressionValue.includes("+")) {
    //     result = operate(a, "+", b);
    // } else if (expressionValue.includes("-")) {
    //     result = operate(a, "-", b);
    // } else if (expressionValue.includes("*")) {
    //     result = operate(a, "*", b);
    // } else if (expressionValue.includes("/")) {
    //     result = operate(a, "/", b);
    // } else {
    //     alert("Invalid expression");
    //     return;
    // }
    var result = eval(expressionValue);
    expression.value = String(result);
}

document.addEventListener("DOMContentLoaded", function () {
    var expression = document.querySelector("input");
    var buttons = document.querySelectorAll(".number, .operator");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            expression.value += button.textContent;
        });
    });

    document.querySelector("#clear").addEventListener("click", function () {
        expression.value = "";
    });

    document.querySelector("#calculate").addEventListener("click", calculate);

    document.addEventListener("keypress", function (event) {
        var key = event.key.toLowerCase();
        if (key === "enter") {
            calculate();
        } else if (key === "c") {
            expression.value = "";
        } else if (isOperator(key) || isNumber(key)) {
            expression.value += key;
        }
    });
});

function isOperator(key) {
    return ["+", "-", "*", "/"].includes(key);
}

function isNumber(key) {
    return /[0-9]/.test(key);
}
