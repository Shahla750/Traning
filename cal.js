var num1 = "";
var op = "";
var shouldClear = false;

function calc(ch) {
    let box = document.getElementById("box");

    // Numbers & decimal
    if ((ch >= '0' && ch <= '9') || ch === '.') {

        if (shouldClear) {
            box.value = "";
            shouldClear = false;
        }

        // prevent multiple dots
        if (ch === '.' && box.value.includes('.')) return;

        box.value += ch;
    }

    // Clear
    else if (ch === 'C') {
        num1 = "";
        op = "";
        shouldClear = false;
        box.value = "";
    }

    // Operator
    else if (['+', '-', '*', '/', '^', '%'].includes(ch)) {
        if (box.value !== "") {
            num1 = box.value;
            op = ch;
            shouldClear = true; // clear on next number input
        }
    }

    // Equal
    else if (ch === '=') {
        if (num1 !== "" && op !== "" && box.value !== "") {

            let expr = num1 + op + box.value;
            expr = expr.replaceAll("^", "**");

            let result = eval(expr);

            box.value = result;
            num1 = result;
            op = "";
            shouldClear = true;
        }
    }
}
