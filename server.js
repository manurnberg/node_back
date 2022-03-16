const express = require('express');
const db = require('./config/config');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const userRouter = require('./app/routes/user');
const itemsRouter = require('./app/routes/items');

app.use(bodyParser.json({
    limit: '20mb'
}
));

app.use(bodyParser.urlencoded({
    extended: true,
    limit: '20mb'
}
));


app.use(userRouter);
app.use(itemsRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

db();