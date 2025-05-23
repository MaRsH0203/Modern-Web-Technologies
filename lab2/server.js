const express = require('express');
const app = express();
const routes = require('./routes/routes');

app.use('/', routes);

const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
