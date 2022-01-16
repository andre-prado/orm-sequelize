const express = require('express');

const app = express();

app.use(express.json());

const port = 3000;

app.get('/teste', (req, res) => {
    res
        .status(200)
        .send('<h1>Hello, world!</h1>');
});

app.listen(port, () => {
    console.log(`running on port ${port}`);
})

module.exports = app;