const express = require('express');
const router = express.Router();

// Root"
router.get('/', (req, res) => {
    res.send('✅ Server is running! Try /name, /greeting, /add or /calculate');
});

// /name
router.get('/name', (req, res) => {
    res.send('Your Name: Harsh Trivedi');
});

// /greeting
router.get('/greeting', (req, res) => {
    res.send('Hello Harsh Trivedi! Student Number: 123456789');
});

// /add?x=2&y=3
router.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    if (isNaN(x) || isNaN(y)) return res.send('❌ Invalid numbers');
    res.send(`✅ Result: ${x + y}`);
});

// /calculate?a=2&b=3&operation=*
router.get('/calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const op = req.query.operation;

    let result;
    switch (op) {
        case '+': result = a + b; break;
        case '-': result = a - b; break;
        case '*': result = a * b; break;
        case '/': result = b !== 0 ? a / b : '❌ Division by zero'; break;
        case '**': result = a ** b; break;
        default: result = '❌ Invalid operation';
    }

    res.send(`✅ Result of ${a} ${op} ${b} = ${result}`);
});

module.exports = router;
