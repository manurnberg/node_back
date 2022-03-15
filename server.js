const express = require('express');
const db = require('./config/config');
const app = express();
const port = 3000;
const userRouter = require('./app/routes/user');
const itemsRouter = require('./app/routes/items');


app.use(userRouter);
app.use(itemsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

db();