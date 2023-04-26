function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function increment(x) {
    return x = ++x;
}

function decrement(x) {
   return --x;
}

function makeInt(x) {
    let parse;
    parse = parseInt(x, 10);
    return parse;
}

function preserveDecimal(x) {
    let parse;
    parse = parseFloat(x, 10);
    return parse;
}
