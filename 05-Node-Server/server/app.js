let express = require('express');
const app = express();
const sequelize = require("./db");
let journal = require('./controllers/journalcontroller')
let user = require('./controllers/usercontroller')

sequelize.sync();
//sequelize.sync((force: true))

app.use(express.json());

app.use('/user', user);

app.use('/journal', journal);

app.listen(3000, function () {
    console.log('App is listening on port 3000')
})