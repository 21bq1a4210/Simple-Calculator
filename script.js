function operate(a, operator, b) {
    switch (operator) {
        case '+':
            return a+b;;
        case '-':
            return a-b;
        case '*':
            return a*b;
        case '/':
            return a/b;
    }
}

function calculate(){
    for (var i=0; i < symbols.length; i++){
        if (expression.value.includes(symbols[i])){
            a = Number(expression.value.substring(0, expression.value.indexOf(symbols[i])));
            b = Number(expression.value.substring(expression.value.indexOf(symbols[i])+1), expression.value.length);
        }
    } 
    var result = 0;
    var expressionValue = expression.value;

    if (expressionValue.includes("+")) {
        result = operate(a, "+", b);
    } else if (expressionValue.includes("-")) {
        result = operate(a, "-", b);
    } else if (expressionValue.includes("*")) {
        result = operate(a, "*", b);
    } else if (expressionValue.includes("/")) {
        result = operate(a, "/", b);
    } else {
        alert("Invalid expression");
    }

    expression.value = String(result);

}

var expression = document.querySelector("input");

for (var i = 0; document.querySelectorAll(".number, .operator").length > i; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        expression.value += this.textContent;
    })
}

document.querySelector("#clear").addEventListener("click", function(){
    expression.value = "";
})

var a=0, b=0;
var symbols = ["+", "-", "/", "*"]
document.querySelector("#calculate").addEventListener("click", calculate)

function isOperator(key) {
    return ["+", "-", "*", "/"].includes(key);
}

function isNumber(key) {
    return /[0-9]/.test(key);
}

document.addEventListener("keypress",function(event){
    if (event.key === "Enter") {
        calculate();
    } else if (event.key === "c") {
        expression.value="";
    } else if (isOperator(event.key) || isNumber(event.key)) {
        expression.value += event.key;
    }
})

//wnindo methoms
//form ***
//document
//history
//image
//css-menus js+css
//nav
//rex- 

//cookies(clint), section(server) objects
//ajix

