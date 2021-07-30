var express = require ("express");
var app = express();
var testController = require('./controllers/testcontroller');
var calculatorController = require('./controllers/calculatorcontroller');

app.use(express.json());
app.use("/test", testController);

app.use('/calculator', calculatorController);
app.listen(3000, function () {
    console.log("App is listening on port 3000");
})